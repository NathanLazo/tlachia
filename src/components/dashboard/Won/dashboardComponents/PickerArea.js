import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const PickerArea = ({
  currentId,
  sidebarNavigation,
  handleFieldState
}) => {
  return (
    <div className="relative">
      <label htmlFor="inbox-select" className="sr-only">
        Area
      </label>
      <select
        id="inbox-select"
        className="rounded-md border-0 bg-none pl-3 pr-8 text-base font-medium text-gray-900 focus:ring-2 focus:ring-[#DFB600] "
        onChange={(e) => handleFieldState(parseInt(e.target.value))}
      >
        <option value={currentId}>Selecciona aquí</option>
        {
          sidebarNavigation.map(item => (
            <option value={item.id}
              key={item.id}
            >{item.name}</option>
          ))
        }
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-2">
        <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
      </div>
    </div>
  )
}

export default PickerArea