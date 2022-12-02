import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'

export default function Products() {
  return (
    <>
      <Head>
        <title>Bikes</title>
        <meta
          name="description"
          content="Bike store from sweden to the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <section className="grid h-screen grid-cols-3 gap-8 pt-24 mt-auto">
        <div className="flex flex-col justify-between gap-12 pt-10 pb-14 bg-slate-200">
          <h2 className="text-4xl font-bold text-center uppercase">Bikes</h2>
          <div className="w-full h-96">
            <Image
              className="inset-0 object-contain w-11/12 h-full mx-auto -z-10"
              src="/bike-2.png"
              alt="Bike"
              width={800}
              height={1080}
            />
          </div>
          <button className="px-7 py-1.5 mx-auto font-bold uppercase border-2 border-black hover:bg-black hover:text-white duration-200 transition-colors rounded-full w-max">
            Go to shop
          </button>
        </div>
        <div className="flex flex-col justify-between gap-12 pt-10 pb-14 bg-slate-200">
          <h2 className="text-4xl font-bold text-center uppercase">Bikes</h2>
          <div className="w-full h-96">
            <Image
              className="inset-0 object-contain w-11/12 h-full mx-auto -z-10"
              src="/bike-2.png"
              alt="Bike"
              width={800}
              height={1080}
            />
          </div>
          <button className="px-7 py-1.5 mx-auto font-bold uppercase border-2 border-black hover:bg-black hover:text-white duration-200 transition-colors rounded-full w-max">
            Go to shop
          </button>
        </div>
        <div className="flex flex-col justify-between gap-12 pt-10 pb-14 bg-slate-200">
          <h2 className="text-4xl font-bold text-center uppercase">Bikes</h2>
          <div className="w-full h-96">
            <Image
              className="inset-0 object-contain w-11/12 h-full mx-auto -z-10"
              src="/bike-2.png"
              alt="Bike"
              width={800}
              height={1080}
            />
          </div>
          <button className="px-7 py-1.5 mx-auto font-bold uppercase border-2 border-black hover:bg-black hover:text-white duration-200 transition-colors rounded-full w-max">
            Go to shop
          </button>
        </div>
      </section>
    </>
  )
}
