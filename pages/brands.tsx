import Image from 'next/image'
import { json } from 'stream/consumers'
import { InferGetServerSidePropsType } from 'next'
import { GetServerSideProps } from 'next'
import { getBrands } from '../lib/brands'
import Link from 'next/link'

export default function Brands({
  brands,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="w-full font-aeonik">
      {brands.map((brand, i) => (
        <section
          className="flex items-end even:flex-row-reverse"
          key={brand.id}
        >
          <Link
            href={`/brands/${brand.name.toLowerCase().split(' ').join('-')}`}
            className="flex items-end w-full h-full py-4"
          >
            <div
              className={`${
                (i + 1) % 2 === 0 ? 'flex-row-reverse' : ''
              } flex items-baseline justify-between w-full px-4 hover:underline`}
            >
              <h2 className="font-bold uppercase text-7xl w-max hover:cursor-pointer">
                {brand.name}
              </h2>
              <div className="flex items-center justify-center px-6 duration-200 ease-in-out border border-black rounded-full hover:cursor-pointer w-max hover:text-white hover:bg-black transition-color">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 2 24 20"
                    strokeWidth="1"
                    stroke="currentColor"
                    className={`w-12 h-10 ${
                      (i + 1) % 2 === 0 ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </Link>
          <div className="w-full h-full bg-slate-200">
            <Image
              className="object-cover w-full h-full mx-auto"
              src="/bike-2.png"
              alt="Bike"
              width={800}
              height={1920}
            />
          </div>
        </section>
      ))}
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const brands = await getBrands()
  return {
    props: { brands },
  }
}
