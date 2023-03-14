import React from 'react';
import { motion } from 'framer-motion';

const Features = ({ items }) => {
    return (
        <>
            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    {items?.map((item) => (
                        <div key={item.name} className="relative">
                            <dt>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#DFB600] text-white">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </motion.div>
                                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.name}</p>
                            </dt>
                            <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    );
};
export default Features;
