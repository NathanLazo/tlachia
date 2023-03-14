import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import toast, { Toaster } from 'react-hot-toast';
import { client } from '@lib/sanityClient';
import { useRouter } from 'next/router';
import axios from 'axios';

const Modal = ({ openPasswordModal, setPasswordModal, setResult }) => {
    const router = useRouter();
    const { userId } = router.query;
    const [hashedPassword, setHashedPassword] = useState('');
    const [actualPassword, setActualPassword] = useState('');

    const fetchData = async () => {
        const query = `*[_type == "users" && _id == "${userId}"] {
            "password": password
        }`;
        const password = await client.fetch(query);
        setHashedPassword(password[0].password);
    };

    useEffect(() => {
        fetchData();
    }, [fetchData && router.isReady && userId]);

    const comparePassword = async (e) => {
        e.preventDefault();
        await axios
            .post('/api/comparePassword', {
                password: actualPassword,
                hash: hashedPassword,
            })
            .then(async (response) => {
                const result = response.data.result;
                setResult(result);
                if(result){
                    setPasswordModal(false)
                }else{
                    toast.error('Contraseña incorrecta');
                }
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
            <Transition.Root show={openPasswordModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setPasswordModal}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed z-10 inset-0 overflow-y-auto">
                        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <form>
                                    <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                                        <div>
                                            <div className="sm:flex-auto mb-4">
                                                <h1 className="text-xl font-semibold text-gray-900">Cambiar contraseña</h1>
                                                <p className=" mt-2 text-sm text-gray-700">Para continuar por favor ingrese su contraseña</p>
                                            </div>
                                            <p className="text-gray-500 text-sm mb-2">Contraseña actual</p>
                                            <input
                                                type="password"
                                                className="focus:border-none focus:ring-[#B59400] focus:outline-none appearance-none border-[#DFB600] rounded-lg w-full py-2 px-4 text-gray-700 mb-8"
                                                value={actualPassword}
                                                autoComplete="current-password"
                                                onChange={(e) => {
                                                    setActualPassword(e.target.value);
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#DFB600] text-base font-medium text-white hover:bg-[#B59400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B59400] sm:text-sm"
                                                onClick={(e) => comparePassword(e)}
                                            >
                                                Confirmar
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </form>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default Modal;
