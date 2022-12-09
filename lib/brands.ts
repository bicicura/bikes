import prisma from '../client'

export async function getBrands() {
  return await prisma.brand.findMany({})
}

export async function getBrandAndProducts(slug: string) {
  return await prisma.brand.findUnique({
    where: { slug },
    include: { products: true },
  })
}
