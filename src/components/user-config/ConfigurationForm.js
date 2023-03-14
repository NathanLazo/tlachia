import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import CountryInput from './CountryInput';
import { client } from '@lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';

const ConfigurationForm = () => {
    const formRef = useRef(null);
    const router = useRouter();
    const [user, setUser] = useState({});
    const { userId } = router.query;
    const fetch = async () => {
        try {
            const query = `*[_type == "users" && _id == "${userId}"] {
            "email": email,
            "name": name,
            "firstName": firstName,
            "lastName": lastName,
            "country": country,
            "state": state,
        }`;
            const userFromDB = await client.fetch(query);
            setUser(userFromDB[0]);
        } catch (e) {
            toast.error('Recarga la pagina por favor');
        }
    };

    useEffect(() => {
        fetch();
    }, [userId && user && setUser]);

    const updateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            email: formData.get('email'),
            name: formData.get('name'),
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            country: formData.get('country'),
            state: formData.get('state'),
        };
        client
            .patch(`${userId}`) // Document ID to patch
            .set(data) //merge of document
            .commit() // Perform the patch and return a promise
            .then(() => {
                toast('Perfil actualizado', { type: 'success' });
            })
            .catch(() => {
                toast('Error al actualizar el perfil', { type: 'error' });
            });
    };

    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    // Default options for specific types
                    success: {
                        duration: 3000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />

            <form className="divide-y divide-gray-200 lg:col-span-9" ref={formRef} onSubmit={updateProfile}>
                {/* Profile section */}
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                    <div className="mt-6 flex flex-col lg:flex-row">
                        <div className="flex-grow space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <div className="mt-1 rounded-md shadow-sm flex">
                                    <span className="bg-gray-50 border border-r-0 border-gray-300 rounded-l-md px-3 inline-flex items-center text-gray-500 sm:text-sm">@</span>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={user?.email ?? ''}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        className="focus:ring-[#B59400] focus:border-[#B59400] flex-grow block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Usuario
                                </label>
                                <div className="mt-1 rounded-md shadow-sm flex">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={user?.name ?? ''}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        className="focus:ring-[#B59400] focus:border-[#B59400] flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0">
                        <p className="text-sm font-medium text-gray-700" aria-hidden="true">
                            Photo
                        </p>
                        <div className="mt-1 lg:hidden">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 inline-block rounded-full overflow-hidden h-12 w-12" aria-hidden="true">
                                    <img className="rounded-full h-full w-full" alt="" />
                                </div>
                                <div className="ml-5 rounded-md shadow-sm">
                                    <div className="group relative border border-gray-300 rounded-md py-2 px-3 flex items-center justify-center hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-sky-500">
                                        <label htmlFor="mobile-user-photo" className="relative text-sm leading-4 font-medium text-gray-700 pointer-events-none">
                                            <span>Change</span>
                                            <span className="sr-only"> user photo</span>
                                        </label>
                                        <input id="mobile-user-photo" name="user-photo" type="file" className="absolute w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden relative rounded-full overflow-hidden lg:block">
                            <img className="relative rounded-full w-40 h-40" alt="" />
                            <label
                                htmlFor="desktop-user-photo"
                                className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                            >
                                <span>Change</span>
                                <span className="sr-only"> user photo</span>
                                <input type="file" id="desktop-user-photo" name="user-photo" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md" />
                            </label>
                        </div>
                    </div> */}
                    </div>

                    <div className="mt-6 grid grid-cols-12 gap-6">
                        <div className="col-span-12 sm:col-span-6">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                Nombre
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={user?.firstName ?? ''}
                                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B59400] focus:border-[#B59400] sm:text-sm"
                            />
                        </div>

                        <div className="col-span-12 sm:col-span-6">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Apellido
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={user?.lastName ?? ''}
                                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B59400] focus:border-[#B59400] sm:text-sm"
                            />
                        </div>

                        <div className="col-span-12 sm:col-span-6">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                País
                            </label>
                            {
                                user?.country
                                ? <CountryInput country={user?.country} /> 
                                : <CountryInput />
                            }
                        </div>

                        <div className="col-span-12 sm:col-span-6">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                Estado
                            </label>
                            <input
                                type="text"
                                name="state"
                                id="state"
                                value={user?.state ?? ''}
                                onChange={(e) => setUser({ ...user, state: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#B59400] focus:border-[#B59400] sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="">
                    <button type="submit" className="rounded-b-md px-6 py-2 bg-[#DFB600] text-white w-full">
                        Guardar
                    </button>
                </div>
            </form>
        </>
    );
};

export default ConfigurationForm;
