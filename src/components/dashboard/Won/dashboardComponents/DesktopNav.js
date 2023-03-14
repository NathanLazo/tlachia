import React from 'react';
import Link from 'next/link';

import SearchBar from './SearchBar';
import ProfileDropdown from '@components/nav/ProfileDropdown';

const DesktopNav = () => {
    const projectId = '1234';
    return (
        <div className="hidden lg:min-w-0 lg:flex-1 lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1 lg:ml-2">
                <SearchBar />
            </div>
            <div className="ml-10 pr-4 flex-shrink-0 flex items-center space-x-10">
                <nav aria-label="Global" className="flex space-x-10">
                    <Link href={`/config/${projectId}`}>
                        <div className="text-sm font-medium text-gray-900 cursor-pointer">Configuración</div>
                    </Link>
                </nav>
                <ProfileDropdown />
            </div>
        </div>
    );
};

export default DesktopNav;
