import React from 'react'

const Features = () => {
  return (
    <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="raza" className="block text-sm font-medium text-gray-700">
                        Raza
                      </label>
                      <input
                        type="text"
                        name="raza"
                        id="raza"
                        className="mt-1 focus:ring-[#DFB600] focus:border-[#DFB600] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="edad" className="block text-sm font-medium text-gray-700">
                        Edad
                      </label>
                      <input
                        type="text"
                        name="edad"
                        id="edad"
                        className="mt-1 focus:ring-[#DFB600] focus:border-[#DFB600] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="peso" className="block text-sm font-medium text-gray-700">
                        Peso
                      </label>
                      <input
                        type="text"
                        name="peso"
                        id="peso"
                        className="mt-1 focus:ring-[#DFB600] focus:border-[#DFB600] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Features