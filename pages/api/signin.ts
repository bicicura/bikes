import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../client'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

const Signin = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        time: Date.now(),
      },
      'hello',
      {
        expiresIn: '8h',
      }
    )

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('BIKES_ACCESS_TOKEN', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    ) // this goes in .env

    res.status(200)
    res.json('user')
  } else {
    res.status(401)
    res.json({ error: 'Please try again, credentials are wrong.' })
  }
}

export default Signin
