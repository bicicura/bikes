import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// migrate and reset db first.

async function main() {
  // await prisma.product.deleteMany()
  // await prisma.brand.deleteMany()
  // await prisma.category.deleteMany()
  // console.log('Deleted records in db')
  await createBrands()
  await createCategories()
  // await createProducts()
}

async function createCategories() {
  const categories = [
    { name: 'Sportive', slug: 'sportive' },
    { name: 'Classic', slug: 'classic' },
    { name: 'Modern', slug: 'modern' },
    { name: 'Cargo', slug: 'cargo' },
    { name: 'Touring', slug: 'touring' },
    { name: 'Female', slug: 'female' },
    { name: 'Male', slug: 'male' },
    { name: 'Kids', slug: 'kids' },
    { name: 'E-Bike', slug: 'e-bike' },
  ]

  categories.map(async (category) => {
    await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
      },
    })
  })
}

async function createBrands() {
  const brands = [
    {
      name: 'Schindelhauer',
      slug: 'schindelhauer',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      name: 'Pelago',
      slug: 'pelago',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      name: 'Bella Ciao',
      slug: 'bella-ciao',
      description: 'Lorem ipsum dolor sit amet.',
    },
    {
      name: 'Coboc',
      slug: 'coboc',
      description: 'Lorem ipsum dolor sit amet.',
    },
  ]

  brands.map(async (brand) => {
    await prisma.brand.create({
      data: {
        name: brand.name,
        slug: brand.slug,
        description: brand.description,
      },
    })
  })
}

async function createProducts() {
  const products = [
    {
      name: 'Gustav',
      slug: 'gustav',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 1,
      brandId: 1,
    },
    {
      name: 'Hannah',
      slug: 'hannah',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 2,
      brandId: 1,
    },
    {
      name: 'Airisto street',
      slug: 'airisto-street',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 3,
      brandId: 2,
    },
    {
      name: 'Brooklyn',
      slug: 'brooklyn',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 4,
      brandId: 2,
    },
    {
      name: 'Ingegnere',
      slug: 'ingegnere',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 5,
      brandId: 3,
    },
    {
      name: 'Viktor',
      slug: 'viktor',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 6,
      brandId: 3,
    },
    {
      name: 'Ten Merano',
      slug: 'ten-merano',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 7,
      brandId: 4,
    },
    {
      name: 'Kallio Comfort',
      slug: 'kallio-comfort',
      description: 'Lorem ipsum dolor sit amet.',
      price: 1000,
      image: 'https://via.placeholder.com/500x500',
      categoryId: 8,
      brandId: 4,
    },
  ]

  products.map(async (product) => {
    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        description: product.description,
        price: product.price,
        image: product.image,
        categoryId: product.categoryId,
        brandId: product.brandId,
      },
    })
  })
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
