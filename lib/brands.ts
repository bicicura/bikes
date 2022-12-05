import prisma from '../client'

export function getBrands() {
  return prisma.brand.findMany({})
}

export function getBrandAndProducts(id: number) {
  return prisma.brand.findUnique({
    where: { id },
    include: { products: true },
  })
}
