import React from 'react';

const SearchBar = ({ setInput }) => {
    return (
        <div className="mt-24 flex flex-col place-items-center">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700">
                Search your product
            </label>
            <div className="relative mt-1 w-60 md:w-96 flex items-center">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-[#9e8102] focus:ring-[#9e8102] sm:text-sm"
                    onChange={(e) => setInput(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">⌘K</kbd>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
