import Image from 'next/image'
import Link from 'next/link'

export default function ShopItem({ product }: any) {
  return (
    <Link
      href={`/products/bikes/${product.slug}`}
      className="aspect-square group"
    >
      <div className="w-full h-full bg-slate-200">
        <Image
          className="object-contain w-full h-full mx-auto"
          src={`/${product.image}`}
          alt="Bike"
          width={800}
          height={1080}
        />
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="group-hover:underline">
          <span className="font-bold">{product.name}</span> <span>/</span>{' '}
          <span>{product.brand.name}</span>
        </div>
        <button className="px-4 py-0.5 text-white bg-blue-500 rounded-md">
          Shop now
        </button>
      </div>
    </Link>
  )
}
