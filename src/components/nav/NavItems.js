import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavItems = () => {
    const [selected, setSelected] = useState(0);

    const navItems = [
        {
            id: 1,
            name: 'Acerca de',
            href: '/#about',
        },
        {
            id: 2,
            name: 'Quienes somos',
            href: '/#features',
        },
        {
            id: 3,
            name: 'Precios',
            href: '/#pricing',
        },
        {
            id: 4,
            name: 'Contáctenos',
            href: '/#contact',
        },
    ];

    return (
        <div className="hidden md:ml-6 md:flex md:space-x-8">
            {navItems.map((item, key) => (
                <Link key={key} href={item.href} passHref>
                    <motion.div
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={
                            selected == item.id
                                ? 'border-[#DFB600] text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                        }
                        onClick={() => setSelected(item.id)}
                    >
                        {item.name}
                    </motion.div>
                </Link>
            ))}
        </div>
    );
};

export default NavItems;

{
    /* <Link href="/" passHref>
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
</Link> */
}
