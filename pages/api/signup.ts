import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../client'
import { NextApiRequest, NextApiResponse } from 'next'

// Make sure that this runs only on POST req
const Signup = async (req: NextApiRequest, res: NextApiResponse) => {
  const salt = bcrypt.genSaltSync()
  const { email, password, username } = req.body

  let user

  try {
    console.log(email)
    user = await prisma.user.create({
      data: {
        email,
        username,
        password: bcrypt.hashSync(password, salt),
      },
    })
  } catch (e) {
    res.status(401)
    res.json({ error: 'User already exists' })
    return
  }

  const token = jwt.sign(
    {
      email: user.email,
      username: user.username,
      id: user.id,
      time: Date.now(),
    },
    'hello', // this goes in .env
    { expiresIn: '8h' }
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

  res.json(user)
}

export default Signup
