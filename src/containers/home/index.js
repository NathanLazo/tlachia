import React from 'react';
import Hero from '@components/home/hero';
import Nav from '@containers/nav';
import About from '@components/home/about';
import Features from '@components/home/features';
import Contact from '@components/home/contact';
import Pricing from '@components/home/pricing/Pricing';
import Footer from '@components/home/footer';
import Cookies from '@components/home/cookies';
import Newsletter from '@components/home/newsletter';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function Index() {
    const arrayOfComponents = [
        { key: 'hero', component: <Hero id="home" className="relative w-full h-full pb-10 mt-12 lg:mt-16" /> },
        { key: 'newsletter', component: <Newsletter id="newsletter" className="bg-white w-full h-full" /> },
        { key: 'about', component: <About id="about" className="py-24 bg-white w-full h-full" /> },
        { key: 'features', component: <Features id="features" className="bg-white w-full h-full" /> },
        { key: 'pricing', component: <Pricing id="pricing" className="xl:mx-auto xl:container pt-20 pb-28 2xl:px-0 px-6" /> },
        { key: 'contact', component: <Contact className="bg-gradient-to-b from-[#ffd001] to-[#9e8102] h-96 w-full mb-72 md:mb-96" /> },
    ];

    return (
        <>
            <Toaster /> {/* Toast notifications */}
            <Cookies /> {/* Cookies banner */} {/* TODO: Trace users with facebook conversion API */}
            <Nav /> {/* Navigation bar */}
            {arrayOfComponents.map((component) => (
                <>
                    <motion.div
                        key={component.key}
                        id={component.component.props.id}
                        className={component.component.props.className}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {component.component}
                    </motion.div>
                </>
            ))}
            <Footer />
        </>
    );
}
