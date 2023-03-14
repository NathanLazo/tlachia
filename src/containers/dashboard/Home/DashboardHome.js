import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { HomeIcon, UserIcon, ChartSquareBarIcon, PresentationChartLineIcon } from '@heroicons/react/outline';
import SideBarMobile from '@components/dashboard/Home/SideBarMobile';
import SideBarDesktop from '@components/dashboard/Home/SideBarDesktop';
import MainContent from '@components/dashboard/Home/MainContainer';
import Header from '@components/dashboard/Home/Header';

const navigation = [
    { id: 0, name: 'Inicio', icon: HomeIcon, current: true },
    { id: 1, name: 'Integrantes de proyectos', icon: UserIcon, current: false },
    { id: 2, name: 'Estadísticas de proyectos', icon: ChartSquareBarIcon, current: false },
    { id: 3, name: 'Gastos de proyectos', icon: PresentationChartLineIcon, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Dashboards() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();
    const { userId } = router.query;

    const [selected, setSelected] = useState(navigation[0].id);
    const handleSelectedNavigation = (id) => {
        navigation[selected].current = false;
        navigation[id].current = true;
        setSelected(id);
    };

    return (
        <>
            <div>
                {/* Sidebar mobile */}
                <SideBarMobile navigation={navigation} classNames={classNames} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} handleSelectedNavigation={handleSelectedNavigation} />
                {/* sidebar for desktop */}
                <SideBarDesktop navigation={navigation} classNames={classNames} handleSelectedNavigation={handleSelectedNavigation} />
                <div className="md:pl-64 flex flex-col">
                    {/* Search and profile dropdown + on mobile: side bar state */}
                    <Header classNames={classNames} setSidebarOpen={setSidebarOpen} />
                    {/* Main content */}
                    <MainContent userId={userId} selected={selected} />
                </div>
            </div>
        </>
    );
}
