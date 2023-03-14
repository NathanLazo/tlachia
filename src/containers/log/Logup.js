import React from 'react';
import Image from 'next/image';

import BackgroundImage from '@public/images/logup-img.svg';
import LoginTitle from '@components/log/Title';
// import LoginSocials from "@components/log/LoginSocials";
import Forms from '@components/log/FormSignUp';
import Nav from '@containers/nav';
import { Toaster } from 'react-hot-toast';

const Logup = () => {
    return (
        <>
            <Toaster />
            <Nav />
            <div className="flex mt-8 mb-20">
                <div className="h-full flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-44">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <LoginTitle title={'Registra tu cuenta'} text={'Inicia sesión'} linkhref={'/login'} />
                        <div className="mt-8">
                            <div className="mt-6">
                                <Forms />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex h-screen items-center">
                    <div className="absolute left-[48%] right-[5%]">
                        <Image src={BackgroundImage} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Logup;
