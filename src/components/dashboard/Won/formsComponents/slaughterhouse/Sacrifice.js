import React, { useState } from 'react'

import { Switch } from '@headlessui/react'

const Sacrifice = () => {
    
  const [enabled, setEnabled] = useState(false)

  return (
    <div className="mx-4 mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-3">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="sacrificed" className="flex text-sm font-medium text-gray-700">
                        ¿Sacrificado? &nbsp; <p className='font-bold'>{enabled ? 'Si' : 'No'}</p>
                      </label>
                      <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={`${enabled ? 'bg-[#DFB600]' : 'bg-[#B59400]'}
                          mt-4 focus:outline-none relative inline-flex h-[32px] w-[68px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                      >
                        <span
                          aria-hidden="true"
                          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
                            pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Sacrifice