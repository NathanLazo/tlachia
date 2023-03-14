import React from 'react';
import TraceIcon from '@public/images/trace.svg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const Content = () => {
    const router = useRouter();

    return (
        <div className="relative z-10 px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
            <div className="text-color lg:mx-12 w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
                <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">Tlachia blockchain</h1>
                <div className="f-f-r text-base lg:text-lg pb-20 sm:pb-0 pt-10 xl:pt-6">
                    <h2>Bienvenido a esta nueva plataforma de trazabilidad. Aquí podrás ver el trazado de los procesos de tu empresa.</h2>
                </div>
                <div className="lg:flex">
                    <Link href="/" passHref>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-3  bg-[#DFB600] hover:bg-[#B59400] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9e8102] rounded-lg"
                            onClick={() => router.push('/transactions')}
                        >
                            Explora los trazados
                        </motion.button>
                    </Link>
                </div>
            </div>
            <div className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:pl-16 lg:-ml-4 xl:pl-44">
                <Image src={TraceIcon} alt="Trace" /> {/* Hero image */}
            </div>
            <Link href="/" passHref>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-2  bg-[#DFB600] hover:bg-[#B59400] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9e8102] rounded-lg"
                >
                    Explora los trazados
                </motion.button>
            </Link>
        </div>
    );
};

export default Content;
