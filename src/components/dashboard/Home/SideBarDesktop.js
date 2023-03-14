import React from 'react';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';

const SideBarDesktop = ({ navigation, classNames, handleSelectedNavigation }) => {
    const router = useRouter();

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex-1 flex flex-col min-h-0 bg-gray-800">
                <button className="flex items-center h-16 flex-shrink-0 bg-[#DFB600] cursor-pointer" onClick={() => router.push('/')}>
                    <div className="flex items-center justify-center object-cover h-16 w-16 focus:outline-none focus:ring-2 focus:ring-inset lg:w-20">
                        <ChevronDoubleLeftIcon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-white text-sm font-medium">Inicio</p>
                </button>
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {navigation.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => {
                                    handleSelectedNavigation(item.id);
                                }}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full',
                                )}
                            >
                                <item.icon className={classNames(item.current ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-300', 'mr-3 flex-shrink-0 h-6 w-6')} aria-hidden="true" />
                                {item.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default SideBarDesktop;
