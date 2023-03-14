import React from 'react';
import Image from 'next/image';

import BackgroundImage from '@public/images/login-img.svg';
import LoginTitle from '@components/log/Title';
// import LoginSocials from "@components/log/LoginSocials";
import Forms from '@components/log/FormSignIn';
import Nav from '@containers/nav';
import { Toaster } from 'react-hot-toast';

const Login = () => {
    return (
        <>
            <Toaster />
            <Nav />
            <div className="flex mt-8 mb-20">
                <div className="h-full flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-44">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <LoginTitle title={'Inicia sesión a tu cuenta'} text={'Crea tu cuenta'} linkhref={'/signup'} />
                        <div className="mt-8">
                            {/* <div>
                <LoginSocials text={"Inicia con"} />
                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      O continua con
                    </span>
                  </div>
                </div>
              </div> */}

                            <div className="mt-6">
                                <Forms />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex h-screen items-center">
                    <div className="absolute left-[48%] right-[5%]">
                        <Image src={BackgroundImage} alt="" width={600} height={600} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
