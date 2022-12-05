import prisma from '../client'

export function getBrands() {
  return prisma.brand.findMany({})
}
