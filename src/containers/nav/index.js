/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { useAuth } from '@hooks/useAuth';
import Navigation from '@components/nav';

const Nav = () => {
    const { authPassed, userId } = useAuth(); // Get auth state and user id from context

    return (
        <>
            <Disclosure as="nav" className="bg-white drop-shadow-xl fixed top-0 w-full z-50">
                {/* Navigation component / we pass Auth context to show profile info or dashboard anchor */}
                {({ open }) => <Navigation open={open} authPassed={authPassed} userId={userId} />}
            </Disclosure>
        </>
    );
};

export default Nav;
