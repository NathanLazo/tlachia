import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Buttons = ({ text, to }) => {
    return (
        <Link href={to} passHref>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#DFB600] shadow-sm hover:bg-[#B59400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#917600]"
            >
                <span>{text}</span>
            </motion.button>
        </Link>
    );
};

export default Buttons;
