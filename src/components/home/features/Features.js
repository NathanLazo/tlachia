import React, { useState } from 'react';
import Title from './Title';
import { motion } from 'framer-motion';

const Features = ({ items }) => {
    const [active, setActive] = useState(0);
    return (
        <>
            <div>
                <Title />
                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                    {items.map((item) => (
                        <motion.div
                            whileHover={() => {
                                setActive(item.id);
                                return {
                                    scale: 1.1,
                                    transition: { duration: 0.2 },
                                };
                            }}
                            whileTap={{ scale: 0.9 }}
                            key={item.name}
                            className={'border-t border-gray-200 pt-4' + (active === item.id ? ' border-[#ffd001]' : '')}
                        >
                            <dt className="font-medium text-gray-900">{item.name}</dt>
                            <dd className="mt-2 text-sm text-gray-500">{item.description}</dd>
                        </motion.div>
                    ))}
                </dl>
            </div>
        </>
    );
};
export default Features;
