import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { UserCircleIcon, KeyIcon, BadgeCheckIcon, CreditCardIcon } from '@heroicons/react/outline';
import Nav from '@components/user-config/Nav';
import ConfigurationForm from '@components/user-config/ConfigurationForm';
import PasswordForm from '@components/user-config/PasswordForm';

const subNavigation = [
    { id: 'sub-0', name: 'Cuenta', icon: UserCircleIcon },
    { id: 'sub-1', name: 'Contraseña', icon: KeyIcon },
    { id: 'sub-2', name: 'Verificación', icon: BadgeCheckIcon },
    { id: 'sub-3', name: 'Billetera', icon: CreditCardIcon },
];

const Configuration = () => {
    const [currentSubNavigation, setCurrent] = useState('sub-0');
    const [lastCurrentSubNavigation, setLastCurrent] = useState('');

    useEffect(() => {
        if (lastCurrentSubNavigation != '') {
            document.getElementById(lastCurrentSubNavigation).classList.remove('bg-gray-200');
        }
        document.getElementById(currentSubNavigation).classList.add('bg-gray-200');
        setLastCurrent(currentSubNavigation);
    }, [currentSubNavigation]);

    return (
        <div>
            {/* We can move this disclosure into its own component */}
            <Disclosure as="div" className="relative bg-[#9e8102] pb-32 overflow-hidden">
                <>
                    <Nav />
                    <div aria-hidden="true" className={'absolute inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0'}>
                        <div className="absolute inset-0 flex">
                            <div className="h-full w-1/2" style={{ backgroundColor: '#DFB600' }} />
                            <div className="h-full w-1/2" style={{ backgroundColor: '#B59400' }} />
                        </div>
                        <div className="relative flex justify-center">
                            <svg className="flex-shrink-0" width={1750} height={308} viewBox="0 0 1750 308" xmlns="http://www.w3.org/2000/svg">
                                <path d="M284.161 308H1465.84L875.001 182.413 284.161 308z" fill="#DFB600" />
                                <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#DFB600" />
                                <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#DFB600" />
                                <path d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z" fill="#B59400" />
                            </svg>
                        </div>
                    </div>
                    <header className="relative py-10">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold text-white">Configuración</h1>
                        </div>
                    </header>
                </>
            </Disclosure>

            <main className="relative -mt-32">
                <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
                    <div className="bg-gray-50 rounded-lg shadow overflow-hidden">
                        <div className="divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0">
                            <aside className="py-6 lg:col-span-3">
                                <nav className="space-y-2">
                                    {subNavigation.map((item) => (
                                        <button
                                            key={item.id + ': ' + item.name}
                                            id={item.id}
                                            className={'text-gray-500 hover:text-gray-600 hover:bg-gray-200 group px-3 w-full py-2 flex items-center text-sm font-medium'}
                                            onClick={() => setCurrent(item.id)}
                                        >
                                            <item.icon className={'text-gray-500 group-hover:text-gray-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6'} aria-hidden="true" />
                                            <span className="truncate">{item.name}</span>
                                        </button>
                                    ))}
                                </nav>
                            </aside>
                            {(currentSubNavigation == 'sub-0' && <ConfigurationForm />) || (currentSubNavigation == 'sub-1' && <PasswordForm />)}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Configuration;
