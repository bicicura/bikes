import { NextRequest, NextResponse } from 'next/server'

const signedinPages = ['/dashboard']

export default function middleware(req: NextRequest) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.get('BIKES_ACCESS_TOKEN')?.value

    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/signin'
      return NextResponse.redirect(url)
    }
  }
}
