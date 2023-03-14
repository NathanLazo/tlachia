import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TlachiaLogo from '@public/images/tlachia-logo.png';
import { motion } from 'framer-motion';

const Logos = () => {
    return (
        <div className="flex-shrink-0 flex items-center">
            <>
                <Link href="/" passHref>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="block lg:hidden h-[75%] w-auto cursor-pointer"
                    >
                        <Image src={TlachiaLogo} alt="Workflow" height={50} width={50} />
                    </motion.div>
                </Link>
                <Link href="/" passHref>
                    <motion.div
                        whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden lg:block h-[75%] w-auto cursor-pointer"
                    >
                        <Image src={TlachiaLogo} alt="Workflow" height={50} width={50} />
                    </motion.div>
                </Link>
            </>
        </div>
    );
};

export default Logos;
