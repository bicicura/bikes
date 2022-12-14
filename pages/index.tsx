import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="font-aeonik">
      <Head>
        <title>Bikes</title>
        <meta
          name="description"
          content="Bike store from sweden to the world."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex w-full min-h-screen text-white">
        <main className="flex flex-col justify-between w-6/12 bg-blue-700 pl-14">
          <div></div>
          <div className="leading-none">
            <h1 className={`${styles.lineTight} uppercase text-8xl`}>
              Bike <br /> the city <br /> be the revolution
            </h1>
          </div>
          <div>
            <div className="flex items-center justify-between mb-12 mr-14">
              <button className="px-6 py-1 text-xl uppercase transition-colors duration-200 border border-white rounded-full hover:bg-white hover:text-blue-700">
                Go shop now
              </button>
              <div className="text-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  className="w-16 h-16"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </main>
        <aside className="relative flex flex-col w-6/12">
          <div className="mt-auto ml-12 text-white drop-shadow-lg mb-14">
            <p>Bikes / 3 de Febrero 4650, Buenos Aires Argentina</p>
            <p>www.bikes.com / +54 9 11 5812-5194</p>
          </div>
          <Image
            className="absolute inset-0 object-cover w-full h-full -z-10"
            src="/bg-hero.jpg"
            alt="Bike"
            width={800}
            height={1080}
          />
        </aside>
      </section>
      <div></div>
    </div>
  )
}
