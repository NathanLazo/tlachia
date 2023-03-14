import React from 'react'

const Cuts = () => {

    // const cuts = [
    //     { id: 1, name: 'Tipo de corte' },
    //   ]

  return (
    <div className="mx-4 mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="mt-5 md:mt-0 md:col-span-3">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-2">
              <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
                    Peso
                  </label>
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    className="mt-1 focus:ring-[#DFB600] focus:border-[#DFB600] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="Corte" className="flex text-sm font-medium text-gray-700">
                    Corte 
                  </label>
                  {/* Combox here */}
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Cuts