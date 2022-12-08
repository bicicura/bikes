import Image from 'next/image'
import { GetServerSideProps } from 'next'
import prisma from '../../../client'

export default function Detail(props) {
  const product = JSON.parse(props.product)

  const specs = [
    {
      id: 0,
      name: 'Weight',
      info: '13.4 kg',
      image: 'weight.png',
    },
    {
      id: 1,
      name: 'Frame sizes',
      info: 'small, medium, large, extra large',
      image: 'frame.png',
    },
    {
      id: 2,
      name: 'Engine',
      info: 'mahle ebikemotion 250-watt motor - support up to 25m/h',
      image: 'engine.png',
    },
    {
      id: 3,
      name: 'Battery',
      info: 'Integrated 250wh',
      image: 'battery.png',
    },
    {
      id: 4,
      name: 'Lights',
      info: 'Integrated lightskin lights in handlebar and seatpost',
      image: 'light.png',
    },
    {
      id: 5,
      name: 'Power',
      info: 'gates cdx beit and sprockets',
      image: 'power.png',
    },
    {
      id: 6,
      name: 'Accesories',
      info: 'Can be fited with mudguards & a rear pannier',
      image: 'accesories.png',
    },
  ]

  return (
    <>
      <div className="flex min-h-screen font-aeonik">
        <article className="flex flex-col justify-between w-full">
          <div className="flex items-center h-full">
            <section className="flex flex-col content-between w-5/12 max-w-md mx-auto text-justify">
              <h1 className="uppercase text-7xl text-bold">{product.name}</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                cum ratione ad at explicabo eaque cupiditate voluptate, vel
                aliquam. Voluptas ex ipsa nisi saepe ratione voluptatem veniam
                praesentium odit itaque. Ducimus, ut nam. Aspernatur, excepturi.
                Maxime asperiores provident ut adipisci corporis itaque animi?
                Numquam quia aspernatur ad reprehenderit alias aperiam eius rem,
                totam iure vel minima sed? Omnis, pariatur quia? Dicta quod
                omnis sit ea, rem, quibusdam mollitia, necessitatibus nemo
                similique tenetur voluptas aut vero culpa exercitationem velit
                placeat sunt? Nobis sed repellat illum quisquam rem porro
                accusantium voluptatem
              </p>
              <div className="mt-4 space-y-2 divide-y divide-black">
                <div className="flex justify-between">
                  <p>Price: CHF {product.price}.-</p>
                  <button className="font-bold">SHOP NOW</button>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <p className="font-bold">Color</p>
                  <div className="flex gap-1">
                    <div className="bg-green-500 rounded-full w-7 h-7"></div>
                    <div className="bg-blue-500 rounded-full w-7 h-7"></div>
                  </div>
                </div>
              </div>
            </section>
            <section className="w-7/12 h-full bg-slate-100">
              <div>
                <Image
                  className="object-cover w-full h-full mx-auto"
                  src="/bike-2.png"
                  alt="Bike"
                  width={800}
                  height={1920}
                />
              </div>
            </section>
          </div>
          <section className="flex items-center py-4 text-white bg-blue-700">
            <div className="w-5/12 max-w-md mx-auto">
              <h2 className="text-6xl w-max">TECH SPECS</h2>
            </div>
            <div className="flex w-7/12">
              {specs.map((spec) => {
                return (
                  <div
                    className="flex flex-col items-center w-full text-center gap-y-1"
                    key={spec.id}
                  >
                    <div className="w-12 h-12 ">
                      <Image
                        className="object-contain w-full h-full mx-auto"
                        src={`/icons/${spec.image}`}
                        alt="Bike"
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3 className="text-sm">{spec.name}</h3>
                    <h4 className="text-[10px]">{spec.info}</h4>
                  </div>
                )
              })}
            </div>
          </section>
        </article>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let product = await prisma.product.findFirstOrThrow({
    where: {
      slug: context.query.slug,
    },
  })

  product = JSON.stringify(product)

  return {
    props: {
      product,
    },
  }
}
