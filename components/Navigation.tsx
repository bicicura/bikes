import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navigation() {
  const url = useRouter().pathname

  return (
    <nav className="absolute w-full px-4 text-black">
      <ul className="flex justify-between">
        <li className={url === '/' ? 'underline' : ''}>
          <Link href="/">HOME</Link>
        </li>
        <li className={url === '/brands' ? 'underline' : ''}>
          <Link href="/brands">BRANDS</Link>
        </li>
        <li className={url === '/products' ? 'underline' : ''}>
          <Link href="/products">PRODUCTS</Link>
        </li>
        <li className={url === '/about' ? 'underline' : ''}>
          <Link href="/about">ABOUT</Link>
        </li>
        <li className={url === '/merch' ? 'underline' : ''}>
          <Link href="/merch">MERCH</Link>
        </li>
        <li className={url === '/contact' ? 'underline' : ''}>
          <Link href="/contac">CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}
