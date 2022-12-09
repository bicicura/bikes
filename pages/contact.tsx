import Image from 'next/image'

const Contact = () => {
  return (
    <>
      <section className="relative flex items-stretch w-full h-screen font-aeonik">
        <div className="sticky top-0 flex flex-col justify-between w-5/12 h-screen px-4 pb-4 pt-14">
          <h1 className="uppercase text-7xl">Contact</h1>
          <div className="space-y-3 text-center uppercase">
            <h2 className="text-4xl">Opening times</h2>
            <ul>
              <li>TUESDAY TO FRIDAY 11 - 19HR</li>
              <li>SATURDAY 11 - 16HR</li>
              <li>SUNDAY & MONDAY - CLOSED</li>
            </ul>
          </div>
          <div className={`flex items-center justify-between w-full uppercase`}>
            <p>
              PHONE: +41 44 559 4303 <br />
              EMAIL: HELLO@GMAIL.COM
            </p>
            <p>
              3 de febrero, 4650 núñez <br />
              Buenos Aires, Argentina
            </p>
          </div>
        </div>
        <div className="w-7/12 min-h-screen bg-slate-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3715.2100562899686!2d-58.47964095036843!3d-34.551946409741596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sar!4v1670588876945!5m2!1sen!2sar"
            className="w-full h-full border-0 grayscale"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  )
}

export default Contact
