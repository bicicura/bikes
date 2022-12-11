const Dashboard = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <section className="w-full bg-white shadow">
          <header className="mx-auto bg-white divide-y-2 divide-gray-200 max-w-7xl">
            <nav className="flex justify-between pt-4 mb-6">
              <div className="flex gap-12">
                <h2 className="font-bold">BIKES</h2>
                <ul className="flex gap-8 text-gray-400">
                  <li>Products</li>
                  <li>Brands</li>
                  <li>Categories</li>
                </ul>
              </div>
              <div>Username</div>
            </nav>
            <div className="py-6 mx-auto max-w-7xl">
              <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Dashboard — Bikes
              </h2>
            </div>
          </header>
        </section>
        <section className="mt-16">
          <div className="relative max-w-2xl mx-auto min-w-xl">
            <table className="w-full mx-auto bg-gray-200 divide-y rounded-xl h-fit">
              <thead>
                <tr>
                  <th className="w-4 pl-6 text-xs font-bold leading-4 tracking-wider text-left text-gray-500 uppercase">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </th>
                  <th className="px-6 py-3 text-left w-max">
                    <div className="flex items-center">
                      <button className="text-xs font-bold leading-4 tracking-wider text-left text-gray-500 uppercase">
                        Name
                      </button>
                    </div>
                  </th>
                  <th className="px-6 py-3 text-xs font-bold leading-4 tracking-wider text-left text-gray-500 uppercase">
                    Category
                  </th>
                  <th className="px-6 py-3 text-xs font-bold leading-4 tracking-wider text-left text-gray-500 uppercase">
                    Brand
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="flex items-start justify-center py-8 pl-6">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out rounded-full form-checkbox"
                    />
                  </td>
                  <td className="w-4/12 px-6 py-4 whitespace-no-wrap">
                    <div className="flex items-center gap-2">
                      <div className="">
                        <div className="text-sm font-semibold leading-5 text-gray-900 w-max">
                          Product name
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="w-4/12 px-6 py-4 whitespace-no-wrap">
                    <span
                      className="inline-flex px-2 text-xs font-semibold leading-5 rounded-full w-max"
                      style={{ background: '#f1e2dd', color: '#463530' }}
                    >
                      Prod category
                    </span>
                  </td>
                  <td className="w-4/12 px-6 py-4 whitespace-no-wrap">
                    <span className="inline-flex text-xs font-semibold leading-5 text-gray-500 rounded-full line-clamp-1">
                      Prod brand
                    </span>
                  </td>
                  <td className="flex items-center justify-end gap-6 px-6 py-6">
                    <a href="#" title="Editar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-indigo-600 hover:fill-indigo-900"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="m14.1 9 .9.9L5.9 19H5v-.9L14.1 9m3.6-6c-.3 0-.5.1-.7.3l-1.8 1.8L19 8.9 20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.2-.2-.5-.3-.7-.3zm-3.6 3.2L3 17.3V21h3.8l11-11.1-3.7-3.7z"></path>
                      </svg>
                    </a>
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-red-600 hover:fill-red-900"
                        height="24"
                        width="24"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"></path>
                      </svg>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="fixed top-0 left-0 items-center justify-center hidden w-full min-h-screen">
              <div className="w-full max-w-lg p-8 space-y-6 bg-white border border-gray-200 rounded-xl drop-shadow-md">
                <div className="absolute -top-6 -right-6">
                  <button
                    type="button"
                    className="flex items-center justify-center w-12 h-12 text-white transition duration-150 ease-in-out bg-gray-300 rounded-full hover:bg-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-45"
                      width="16"
                      height="17"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#000"
                        d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <h2 className="text-xl font-bold">
                  Estas por eliminar el perfil de{' '}
                  <span x-text="perfilNombre"></span>.
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Una vez eliminado un perfil, se procede a borrar todo su
                    contenido. Esto incluye su información e imágenes.
                  </p>
                </div>
                <div className="flex gap-6 ml-auto text-white w-max">
                  <button className="px-6 py-2 text-black transition ease-in-out bg-indigo-300 rounded-md hover:bg-indigo-900 durantion-150 hover:text-white">
                    Cancelar
                  </button>
                  <button className="px-6 py-2 font-bold transition ease-in-out bg-red-600 rounded-md hover:bg-red-900 durantion-150">
                    Eliminar
                  </button>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10"></div>
            </div>{' '}
          </div>
        </section>
      </div>
    </>
  )
}

Dashboard.authPage = true

export default Dashboard
