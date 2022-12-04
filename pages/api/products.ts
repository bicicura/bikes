// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../client'

type Data = {
  filter: number
  error: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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
      return res.status(200).json(products)
    })
    .catch((err: any) => {
      return res.status(500).json({ error: err })
    })

  prisma.$disconnect()
}
