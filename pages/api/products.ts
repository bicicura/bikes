// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

type Data = {
  filter: number
  error: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const prisma = new PrismaClient()
  const filter = parseInt(req.query.filter)

  const products = prisma.product
    .findMany({
      where: {
        ...(filter !== 0 ? { categoryId: filter } : {}),
      },
      include: {
        brand: {
          select: {
            name: true,
          },
        },
      },
    })
    .then((products: any) => {
      res.status(200).json(products)
    })
    .catch((err: any) => {
      res.status(500).json({ error: err })
    })

  prisma.$disconnect()
}
