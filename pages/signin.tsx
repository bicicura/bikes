import { NextResponse } from 'next/server'
import AuthForm from '../components/authForm'

const Signin = () => {
  return <AuthForm mode="signin" />
}

Signin.authPage = true

export default Signin

export async function getServerSideProps(context) {
  // checkinf if auth token exists
  const token = context.req.cookies.BIKES_ACCESS_TOKEN

  // If the user is already logged in, redirect to the dashboard
  if (token) {
    console.log('hay token!')
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
      props: {},
    }
  }

  return {
    props: {},
  }
}
