import jwt from 'jsonwebtoken'
import { NextApiRequest, NextApiResponse } from 'next'
import { type } from 'os'
import prisma from '../client'

// type id = number | string
type id = {
  id: id
}

export const validateRoute = (handler: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { BIKES_ACCESS_TOKEN: token } = req.cookies

    if (token) {
      let user
      try {
        const { id } = jwt.verify(token, 'hello')
        user = await prisma.user.findUnique({
          where: { id },
        })

        if (!user) {
          throw new Error('Not real user')
        }
      } catch (error) {
        res.status(401)
        res.json({ error: 'Not Authorizied' })
        return
      }
      return handler(req, res, user)
    }

    res.status(401)
    res.json({ error: 'Not Authorizied' })
  }
}
