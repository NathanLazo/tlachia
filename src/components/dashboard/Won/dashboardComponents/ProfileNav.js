import React from 'react';
import { BellIcon } from '@heroicons/react/outline';

const ProfileNav = ({ userNavigation, user }) => {
    return (
        <div className="border-t border-gray-200 pt-4 pb-3">
            <div className="max-w-8xl mx-auto px-4 flex items-center sm:px-6">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user?.imageUrl} alt="" />
                </div>
                <div className="ml-3 min-w-0 flex-1">
                    <div className="text-base font-medium text-gray-800 truncate">{user?.name}</div>
                    <div className="text-sm font-medium text-gray-500 truncate">{user?.email}</div>
                </div>
                <button className="ml-auto flex-shrink-0 bg-white p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-3 max-w-8xl mx-auto px-2 space-y-1 sm:px-4">
                {userNavigation?.map((item) => (
                    <a key={item.name} href={item.href} className="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-50">
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ProfileNav;
