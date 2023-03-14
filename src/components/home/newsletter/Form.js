import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { client } from '@lib/sanityClient';
import { motion } from 'framer-motion';

const Form = () => {
    const ref = useRef(null);

    // Send email to sanity - document: newsletter
    const sendToDB = async (email) => {
        const userData = {
            _type: 'newsletter',
            email: email,
        };
        await client.create(userData);
    };

    /*
        gather data from form and execute sendToDB function

        TODO: add validation
    */
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = ref.current[0].value;
        toast.promise(sendToDB(email), {
            loading: 'Cargando...',
            success: 'Gracias por suscribirte!',
            error: 'Error al suscribirte :(',
        });
    };

    return (
        <>
            <form ref={ref} className="flex items-stretch mt-12" onSubmit={handleSubmit}>
                <input
                    className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:ring-[#9e8102] focus:ring-r-0 focus:border-[#9e8102] focus:border-r-0"
                    type="email"
                    name="email"
                    placeholder="Tu correo aquí"
                    required
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-32 bg-[#DFB600] hover:bg-[#B59400] rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9e8102]"
                    type="submit"
                >
                    enviar
                </motion.button>
            </form>
        </>
    );
};
export default Form;
