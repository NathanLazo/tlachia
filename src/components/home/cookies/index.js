import React, { useState, useEffect } from 'react';
import CookiesIcon from '@assets/cookie-icon';

export default function Cookies() {
    const [menu, showMenu] = useState(false);

    const setCookies = () => {
        localStorage.setItem('cookies', 'true');
        showMenu(false);
    };
    useEffect(() => {
        if (localStorage.getItem('cookies') == 'true') {
            showMenu(false);
        } else {
            showMenu(true);
        }
    }, []);
    return menu ? (
        <div>
            <div className="z-50 relative flex justify-center items-center ">
                <div id="menu" className=" w-full h-full bg-gray-900 bg-opacity-80 top-0  fixed sticky-0">
                    <div className="2xl:container 2xl:mx-auto py-24 px-4 md:px-28 flex justify-center items-center  ">
                        <div className="w-96 md:w-auto relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-12 xl:px-36">
                            <CookiesIcon />
                            <div className="mt-12">
                                <h1 role="main" className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800">
                                    Usamos cookies
                                </h1>
                            </div>
                            <div className="mt">
                                <p className="mt-6 sm:w-80 text-base leading-7 text-center text-gray-800">Por favor acepta las cookies para continuar usando la pagina.</p>
                            </div>
                            <button
                                onClick={() => setCookies()}
                                className="w-full sm:w-auto mt-14 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black "
                            >
                                Aceptar cookies
                            </button>
                            <button
                                onClick={() => {
                                    showMenu(false);
                                }}
                                href="javascript:void(0)"
                                className="mt-6 text-base leading-none focus:outline-none hover:border-gray-800 focus:border-gray-800 border-b  border-transparent text-center text-gray-800"
                            >
                                No... Estoy a dieta
                            </button>
                            <button
                                onClick={() => {
                                    showMenu(false);
                                }}
                                className=" absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                                aria-label="close"
                            >
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;
}
