import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'

const SearchBar = () => {
    return (
        <div className="max-w-2xl relative text-gray-400 focus-within:text-gray-500">
            <label htmlFor="desktop-search" className="sr-only">
                Buscar
            </label>
            <input
                id="desktop-search"
                type="search"
                placeholder="Buscar..."
                className="block w-full rounded-2xl border-transparent focus:border-[#DFB600] border pl-12 placeholder-gray-500 sm:text-sm focus:ring-0"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-4">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </div>
        </div>
    )
}

export default SearchBar