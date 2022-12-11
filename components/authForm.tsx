import { useRouter } from 'next/router'
import { auth } from '../lib/mutations'
import React, { FC, useState } from 'react'

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const user = await auth(mode, { email, password })
    setIsLoading(false)
    router.push('/dashboard')
  }

  return (
    <div className="w-full min-h-screen bg-slate-100">
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-xl font-bold text-center uppercase">Bikes</h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col gap-4 p-4 text-sm bg-white rounded-lg drop-shadow-lg"
          >
            <label htmlFor="email" className="flex flex-col space-y-2">
              <span className="text-gray-500">Email</span>
              <input
                className="p-4 border border-gray-200 rounded-md"
                id="email"
                placeholder="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="flex flex-col">
              <span className="text-gray-500">Password</span>
              <input
                className="p-4 border border-gray-200 rounded-md"
                id="password"
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              type="submit"
              disabled={isLoading ? true : false}
              className="flex px-4 py-2 ml-auto tracking-wider text-white uppercase transition-colors duration-150 bg-gray-900 rounded-md hover:bg-gray-700 w-max disabled:opacity-75 disabled:pointer-events-none"
            >
              <svg
                className={`w-5 h-5 mr-3 -ml-1 text-white animate-spin ${
                  isLoading ? 'inline' : 'hidden'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {mode}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
