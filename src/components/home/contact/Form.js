import React, { useRef } from 'react';
import toast from 'react-hot-toast';
import { client } from '@lib/sanityClient';

const Form = () => {
    const formRef = useRef(null);

    // Send form data to sanity - document: contact_info
    const sendToDB = async (data) => {
        const userData = {
            _type: 'contact_info',
            name: data.name,
            country: data.country,
            email: data.email,
            message: data.message,
            accepted_terms: data.accepted_terms,
        };
        await client.create(userData);
    };

    // Gather form data and use sendToDB()
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            name: formData.get('name'),
            country: formData.get('country'),
            email: formData.get('email'),
            tel: formData.get('phone'),
            message: formData.get('message'),
            accepted_terms: formData.get('t_and_c') === 'on' ? true : false,
        };
        toast.promise(sendToDB(data), {
            loading: 'Cargando...',
            success: 'Mensaje enviado!',
            error: 'Error al enviar mensaje :(',
        });
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label htmlFor="name" className="text-base font-semibold leading-none text-gray-800">
                            Nombre
                        </label>
                        <input
                            arial-label="Please input name"
                            type="name"
                            name="name"
                            className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:ring-1 focus:ring-[#9e8102] focus:border-[#9e8102] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-200"
                            placeholder="Nombre completo"
                            required
                        />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label htmlFor="country" className="text-base font-semibold leading-none text-gray-800">
                            País
                        </label>
                        <input
                            arial-label="Please input country"
                            type="text"
                            name="country"
                            className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:ring-[#9e8102] focus:border-[#9e8102] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-200"
                            placeholder="Pais de residencia"
                        />
                    </div>
                </div>
                <div className="md:flex items-center mt-2">
                    <div className="md:w-72 flex flex-col">
                        <label htmlFor="email" className="text-base font-semibold leading-none text-gray-800">
                            Correo
                        </label>
                        <input
                            arial-label="Please input email"
                            type="email"
                            name="email"
                            className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:ring-[#9e8102] focus:border-[#9e8102] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-200"
                            placeholder="Correo electrónico"
                            required
                        />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label htmlFor="phone" className="text-base font-semibold leading-none text-gray-800">
                            Tel.
                        </label>
                        <input
                            arial-label="Please input phone number"
                            type="tel"
                            name="phone"
                            className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:ring-[#9e8102] focus:border-[#9e8102] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-200"
                            placeholder="Numero de teléfono"
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-4">
                        <label htmlFor="message" className="text-base font-semibold leading-none text-gray-800">
                            Mensaje
                        </label>
                        <textarea
                            aria-label="leave a message"
                            type="text"
                            name="message"
                            className="h-18 text-base leading-none text-gray-900 p-3 focus:outline-none focus:ring-[#9e8102] focus:border-[#9e8102] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-200 resize-none"
                            defaultValue={''}
                        />
                    </div>
                </div>

                <div>
                    <div className="w-full flex mt-6">
                        <input type="checkbox" name="t_and_c" className="my-auto mr-4 rounded h-4 w-4 border-gray-300 text-[#DFB600] focus:ring-[#B59400] " required />
                        <p>Estoy de acuerdo con los términos y condiciones.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full">
                    <button className="mt-6 text-base font-semibold leading-none text-white py-4 px-10 bg-[#DFB600] rounded hover:bg-[#B59400] focus:ring-2 focus:ring-offset-2 focus:ring-[#9e8102] focus:outline-none">
                        Enviar
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
