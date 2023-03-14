import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const MobileMenuButton = ({ open }) => {
  return (
    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#DFB600]">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  )
}

export default MobileMenuButton