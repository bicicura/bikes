import { GetServerSideProps } from 'next'
import ShopItem from '../../components/shopItem'
import { useState } from 'react'
import { SearchFilters } from '../../components/SearchFilters'
import prisma from '../../client'
import fetcher from '../../lib/fetcher'

export default function Slug(props: any) {
  const [filter, setFilter] = useState(0)
  const [products, setProducts] = useState(JSON.parse(props.data).allProducts)
  const categories = JSON.parse(props.data).allCategories
  categories.unshift({ name: 'All bikes', id: 0 })

  const handleFilter = (filter: number) => {
    setFilter(filter)
    requestProducts(filter)
  }

  const requestProducts = (filter: number) => {
    // request products by filter
    fetch(`/api/products?filter=${filter}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setProducts(data)
      })
  }

  return (
    <>
      <div className="pt-20 mx-4">
        <SearchFilters
          handleFilter={handleFilter}
          categories={categories}
          activeFilter={filter}
        />

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

    const allCategories = await prisma.category.findMany({})

    return { allProducts, allCategories }
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

  let data = null
  data = await main()

  data = JSON.stringify(data)

  return {
    // pass allProducts as a prop
    props: { data }, // will be passed to the page component as props
  }
}
