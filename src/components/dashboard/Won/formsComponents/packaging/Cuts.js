import React from 'react'


const Cuts = () => {

    // const cuts = [
    //     { id: 1, name: 'chamberete' },
    //     { id: 2, name: 'pierna' },
    //     { id: 3, name: 'pulpa/contra' },
    //     { id: 4, name: 'chambere' },
    //     { id: 5, name: 'barra/sirloin' },
    //     { id: 6, name: 'falda' },
    //     { id: 7, name: 'paleta' },
    //     { id: 8, name: 'espaldilla' },
    //     { id: 9, name: 'costilla' },
    //     { id: 10, name: 'brisket' },
    //     { id: 11, name: 'pescuezo' },
    //     { id: 12, name: 'chamberete' },
    //     { id: 13, name: 'riñón' },
    //     { id: 14, name: 'rabo' },
    //     { id: 15, name: 'arrachera/in' },
    //     { id: 16, name: 'pulpa/full' },
    //     { id: 17, name: 'pulpa/pulpa' },
    //     { id: 18, name: 'pulpa/negra' },
    //     { id: 19, name: 'pulpa/bola' },
    //     { id: 20, name: 'arrachera/outside'},
    //     { id: 21, name: 'arrachera/gallo'},
    //     { id: 22, name: 'barra/t-bone'},
    //     { id: 23, name: 'barra/short rib'},
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