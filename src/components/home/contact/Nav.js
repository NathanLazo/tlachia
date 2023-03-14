import React from 'react';
import { Disclosure } from '@headlessui/react';
import Logos from '../../nav/Logos';
import Link from 'next/link';

const Nav = () => {
    return (
        <Disclosure as="nav" className="bg-white shadow fixed top-0 w-full z-50">
            <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            {/* Logos */}
                            <Logos />
                            <div className="hidden md:ml-6 md:flex md:space-x-8">
                                <Link href="/">
                                    <div className="hover:border-[#DFB600] text-gray-900 inline-flex items-center px-1 pt-1 hover:border-b text-sm font-medium">Inicio</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </Disclosure>
    );
};

export default Nav;
