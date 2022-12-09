import { getBrandAndProducts } from '../../lib/brands'
import Image from 'next/image'
import Link from 'next/link'

export default function Brand(props) {
  const brand = JSON.parse(props.brand)
  const products = brand.products

  return (
    <>
      <section
        className="relative flex items-stretch w-full h-screen font-aeonik"
        style={{ height: '200vh' }}
      >
        <div className="sticky top-0 flex flex-col justify-between w-5/12 h-screen px-4 pb-4 pt-14">
          <h1 className="uppercase text-7xl">{brand.name}</h1>
          <div>
            <p className="w-[29ch] ml-auto">
              We build high-quality, low-maintenance bikes - belt driven since
              day one.
            </p>
          </div>
          <div className={`flex items-center justify-between w-full`}>
            <p>
              bikes / 3 de febrero, 4650 núñez <br /> www.bikes.com.ar / +41 44
              559 4303 / bikes <br /> Buenos Aires, Argentina
            </p>
            <div className="flex items-center justify-center px-6 duration-200 ease-in-out border border-black rounded-full hover:cursor-pointer w-max hover:text-white hover:bg-black transition-color">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 2 24 20"
                  strokeWidth="1"
                  stroke="currentColor"
                  className={`w-12 h-10`}
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
        </div>
        <div className="w-7/12 min-h-screen bg-slate-100">
          <div className="sticky top-0 block h-screen">
            <Image
              className="object-contain w-full h-full mx-auto"
              src="/bike-2.png"
              alt="Bike"
              width={800}
              height={1920}
            />
          </div>
          <div className="sticky top-0 block h-screen">
            <Image
              className="object-cover w-full h-full mx-auto"
              src="/brooklyn.jpg"
              alt="Bike"
              width={800}
              height={1920}
            />
          </div>
        </div>
      </section>
      <section className="relative my-20 font-aeonik">
        <div className="flex items-center justify-between px-4 uppercase">
          <svg
            className="w-20 rotate-90 hover:text-black"
            viewBox="0 0 177.59 177.59"
          >
            <g
              fill="none"
              className="scroll-stroke"
              stroke="currentColor"
              strokeWidth="3"
              strokeMiterlimit="10"
            >
              <circle cx="88.8" cy="88.8" r="87.3"></circle>
              <path d="m143.84 71.71-56.4 56.34-56.4-56.34"></path>
            </g>
          </svg>
          <h2 className="text-5xl">SCHINDELHAUER Models</h2>
          <div>
            <svg className="w-20 -rotate-90" viewBox="0 0 177.59 177.59">
              <g
                fill="none"
                className="scroll-stroke"
                stroke="currentColor"
                strokeWidth="3"
                strokeMiterlimit="10"
              >
                <circle cx="88.8" cy="88.8" r="87.3"></circle>
                <path d="m143.84 71.71-56.4 56.34-56.4-56.34"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex justify-center w-full text-center">
          {products.map((product) => (
            <Link
              href={`/products/bikes/${product.slug}`}
              className="w-full max-w-md mx-auto uppercase"
              key={product.id}
            >
              <Image
                className="object-contain w-full h-full mx-auto"
                src={`/${product.image}`}
                alt="Bike"
                width={800}
                height={1920}
              />
              <h3>{product.name}</h3>
              <button className="text-blue-700 uppercase">Shop now</button>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const brand = JSON.stringify(await getBrandAndProducts(context.query.slug))

  return {
    props: { brand },
  }
}
