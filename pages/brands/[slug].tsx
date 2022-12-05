import Image from 'next/image'

export default function Brand() {
  return (
    <>
      <section className="flex items-stretch w-full h-screen font-aeonik">
        <div className="flex flex-col justify-between w-5/12 pt-14">
          <h1 className="text-7xl">SCHINDELHAUER</h1>
          <div>
            <p className="w-[29ch] ml-auto">
              We build high-quality, low-maintenance bikes - belt driven since
              day one.
            </p>
          </div>
          <div className={`flex items-center justify-between w-full px-4`}>
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
        <div className="w-7/12 bg-slate-100">
          <Image
            className="object-cover w-full h-full mx-auto"
            src="/bike-2.png"
            alt="Bike"
            width={800}
            height={1920}
          />
        </div>
      </section>
      <section className="mt-20 font-aeonik">
        <div className="flex items-center justify-between px-4">
          <div>back</div>
          <h2 className="text-5xl">SCHINDELHAUER Models</h2>
          <div>next</div>
        </div>
        <div className="flex justify-center w-full text-center">
          <div className="w-full max-w-md mx-auto uppercase">
            <Image
              className="object-cover w-full h-full mx-auto"
              src="/bike-2.png"
              alt="Bike"
              width={800}
              height={1920}
            />
            <h3>Arthur SSP</h3>
            <button className="text-blue-700 uppercase">Shop now</button>
          </div>
          <div className="w-full max-w-md mx-auto uppercase">
            <Image
              className="object-cover w-full h-full mx-auto"
              src="/bike-2.png"
              alt="Bike"
              width={800}
              height={1920}
            />
            <h3>Arthur SSP</h3>
            <button className="text-blue-700 uppercase">Shop now</button>
          </div>
        </div>
      </section>
    </>
  )
}
