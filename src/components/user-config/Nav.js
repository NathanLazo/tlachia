import React from 'react';
import { ChevronDoubleLeftIcon } from '@heroicons/react/outline';
import ProfileDropdown from '@components/nav/ProfileDropdown';
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter();
    return (
        <nav className={'relative z-10 border-b border-[#9e8102] border-opacity-25 lg:bg-transparent lg:border-none'}>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative h-16 flex items-center justify-between lg:border-b lg:border-[#9e8102]">
                    <div className="px-2 flex items-center lg:px-0">
                        <div className="flex-shrink-0">
                            <button onClick={() => router.back()}>
                                <ChevronDoubleLeftIcon className="w-8 h-8 text-white cursor-pointer hover:text-gray-200" />
                            </button>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:ml-4">
                        <div className="flex items-center">
                            {/* Profile dropdown */}
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
