import { GetServerSideProps } from 'next'
import ShopItem from '../../components/shopItem'
import { PrismaClient } from '@prisma/client'
import { useState } from 'react'
import { SearchFilters } from '../../components/SearchFilters'

export default function Slug(props: any) {
  const products = JSON.parse(props.allProducts)
  const [filter, setFilter] = useState('All bikes')

  const handleFilter = (filter: string) => {
    setFilter(filter)
  }

  return (
    <>
      <div className="pt-20 mx-4">
        <SearchFilters handleFilter={handleFilter} activeFilter={filter} />

        <section className="grid grid-cols-4 mt-12 uppercase gap-x-4 gap-y-12">
          {products.map((product: any) => (
            <ShopItem key={product.id} product={product} />
          ))}
        </section>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()

  async function main() {
    // get all products with their brand names
    const allProducts = await prisma.product.findMany({
      // include only brand name
      include: {
        brand: {
          select: {
            name: true,
          },
        },
      },
    })
    return allProducts
  }

  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })

  let allProducts = null
  allProducts = await main()

  allProducts = JSON.stringify(allProducts)

  return {
    // pass allProducts as a prop
    props: { allProducts }, // will be passed to the page component as props
  }
}
