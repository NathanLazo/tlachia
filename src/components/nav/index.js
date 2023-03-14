import React from 'react';
import { Disclosure } from '@headlessui/react';
import NavItems from '@components/nav/NavItems';
import Buttons from '@components/nav/Buttons';
import MobileMenuButton from '@components/nav/MobileMenuButton';
import DisclosureTopButtons from '@components/nav/DisclosureTopButtons';
import DisclosureBottomButtons from '@components/nav/DisclosureBottomButtons';
import Logos from '@components/nav/Logos';
import ProfileMobileInfo from '@components/nav/ProfileMobileInfo';
import ProfileDropdown from '@components/nav/ProfileDropdown';

const Index = ({ authPassed, userId, open }) => {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="-ml-2 mr-2 flex items-center md:hidden">
                            {/* Mobile menu button */}
                            <MobileMenuButton open={open} />
                        </div>
                        {/* Logos */}
                        <Logos />
                        {/* Navigation Items  desktop*/}
                        <NavItems />
                    </div>
                    <div className="flex items-center">
                        {/* if not auth { sign in button } else { dashboard button }*/}
                        {!authPassed && (
                            <div className="flex-shrink-0">
                                <Buttons text={'Sign In'} to={'/login'} /> {/* Sign in button */}
                            </div>
                        )}
                        {authPassed && (
                            <div className="flex-shrink-0">
                                <Buttons text={'Dashboard'} to={`/dashboard/home/${userId}`} /> {/* Dashboard button */}
                            </div>
                        )}

                        <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
                            {/* If auth passed show Profile dropdown */}
                            {authPassed && <ProfileDropdown />}
                        </div>
                    </div>
                </div>
            </div>

            <Disclosure.Panel className="md:hidden">
                {/* If auth show user navigation */}
                <div className="pt-4 pb-3  border-gray-200">
                    {authPassed && <ProfileMobileInfo />}
                    {authPassed && <DisclosureBottomButtons />}
                </div>
                {/* Nav items mobile */}
                <div className="pt-2 pb-3 border-t space-y-1">
                    <DisclosureTopButtons />
                </div>
            </Disclosure.Panel>
        </>
    );
};
export default Index;
