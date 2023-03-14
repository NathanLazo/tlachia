import React, { useState } from 'react';
import { useRouter } from 'next/router';
import FormsWonData from '@data/FormsWonData';

import { TruckIcon, HandIcon, TagIcon, HeartIcon, MenuIcon, ShoppingBagIcon, ChevronDoubleLeftIcon } from '@heroicons/react/outline';

import KnifeIcon from '@assets/knife-icon.js';
import PackageIcon from '@assets/package-icon';

import MainArea from '@components/dashboard/Won/dashboardComponents/MainArea';
import FormsList from '@components/dashboard/Won/dashboardComponents/FormsList';
import SideNav from '@components/dashboard/Won/dashboardComponents/SideNav';
import PickerArea from '@components/dashboard/Won/dashboardComponents/PickerArea';
import MobileMenu from '@components/dashboard/Won/dashboardComponents/MobileMenu';
import DesktopNav from '@components/dashboard/Won/dashboardComponents/DesktopNav';
import Popover from '@components/dashboard/Won/dashboardComponents/Popover';

const sidebarNavigation = [
    { name: 'Sagarpa', id: 1, icon: TagIcon, current: false },
    { name: 'Crianza', id: 2, icon: HandIcon, current: false },
    { name: 'Cuidados', id: 3, icon: HeartIcon, current: false },
    { name: 'Transporte', id: 4, icon: TruckIcon, current: false },
    { name: 'Rastro', id: 5, icon: KnifeIcon, current: false },
    { name: 'Empaquetado', id: 6, icon: PackageIcon, current: false },
    { name: 'Venta', id: 7, icon: ShoppingBagIcon, current: false },
];
const user = {
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    imageUrl: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const formData = FormsWonData();

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Dashboard() {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const [fieldsArray, setFieldsArray] = useState([]);
    const [currentId, setCurrentId] = useState(null);
    const [formSelected, setFormSelected] = useState(false);

    const handleFieldState = (id) => {
        if (!isNaN(id)) {
            currentId ? (sidebarNavigation[currentId - 1].current = false) : null;
            setFieldsArray(formData.filter((item) => item.id === id));
            sidebarNavigation[id - 1].current = true;
            setCurrentId(id);
            setFormSelected(false);
        }
    };

    const [form, setForm] = useState('');

    const handleForm = (id) => {
        setForm(id);
        setFormSelected(true);
    };

    return (
        <>
            <div className="h-full flex flex-col ">
                <Popover />
                {/* Navbar */}
                <header className="flex-shrink-0 relative h-16 bg-white flex items-center">
                    {/* Logo area */}
                    <div className="absolute inset-y-0 left-0 lg:static lg:flex-shrink-0">
                        <button
                            className="flex items-center justify-center h-16 w-16 bg-[#DFB600] cursor-pointer focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#DFB600] lg:w-20"
                            onClick={() => router.back()}
                        >
                            <ChevronDoubleLeftIcon className="h-6 w-6 text-white" />
                        </button>
                    </div>
                    {/* Picker area  (sm only)*/}
                    <div className="mx-auto lg:hidden">
                        <PickerArea currentId={currentId} sidebarNavigation={sidebarNavigation} handleFieldState={handleFieldState} />
                    </div>
                    {/* Menu button area */}
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center sm:pr-6 lg:hidden">
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="-mr-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#DFB600]"
                            onClick={() => setOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    {/* Desktop nav area */}
                    <DesktopNav classNames={classNames} />
                    {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
                    <MobileMenu user={user} setOpen={setOpen} open={open} />
                </header>

                {/* Content */}
                <div className="min-h-0 flex-1 flex overflow-hidden">
                    {/* Sidebar*/}
                    <nav aria-label="Sidebar" className="hidden lg:block lg:flex-shrink-0 lg:bg-gray-800 h-screen lg:overflow-y-auto">
                        <SideNav sidebarNavigation={sidebarNavigation} classNames={classNames} handleFieldState={handleFieldState} />
                    </nav>
                    {/* Main area */}
                    <main className="min-w-0 flex-1 border-t border-gray-200 flex">
                        {formSelected && (
                            <>
                                <MainArea form={form} setFormSelected={setFormSelected} />
                            </>
                        )}
                        {/* Forms list*/}
                        <FormsList formSelected={formSelected} fieldsArray={fieldsArray} form={form} handleForm={handleForm} />
                    </main>
                </div>
            </div>
        </>
    );
}
