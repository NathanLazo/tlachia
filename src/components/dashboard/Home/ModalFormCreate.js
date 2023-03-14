import React, { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ListBox from './addOns/ProductListBox';
import toast, { Toaster } from 'react-hot-toast';
import { client } from '@lib/sanityClient';

const Modal = ({ openCreateModal, setOpenCreateModal, userId, fetchProjects }) => {
    const [name, setName] = useState('');
    const [products, setProducts] = useState([]);
    const [selected, setSelected] = useState('');
    const [rev, setRev] = useState('');

    const fetchProducts = async (SanityClient = client) => {
        const query = `*[_type == "products"] {
            _id,
            _rev,
            productName,
        }`;
        const products = await SanityClient.fetch(query);
        setProducts(products);
    };
    const fetchUserRev = async (SanityClient = client) => {
        const query = `*[_type == "users" && _id == "${userId}"] {
            _rev,
        }`;
        const rev = await SanityClient.fetch(query);
        setRev(rev);
    };

    useEffect(() => {
        fetchProducts();
        fetchUserRev();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '') {
            toast.error('El nombre del proyecto no puede estar en blanco');
        } else if (selected === '') {
            toast.error('El producto no puede estar en blanco');
        } else {
            const projectData = {
                _type: 'projects',
                projectName: name,
                product: {
                    _type: 'reference',
                    _key: selected.productName,
                    _ref: selected._id,
                },
                users: [
                    {
                        _type: 'reference',
                        _key: rev,
                        _ref: userId,
                    },
                ],
            };
            try {
                await client.create(projectData);
                toast.success('Project created successfully');
                setOpenCreateModal(false);
                fetchProjects();
            } catch (error) {
                toast.error('Error creado el producto, contactanos para obtener mas información');
            }
        }
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
            <Transition.Root show={openCreateModal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpenCreateModal}>
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
                                                <h1 className="text-xl font-semibold text-gray-900">Agrega tu proyecto</h1>
                                                <p className="mt-2 text-sm text-gray-700">Si no aparece tu producto en la lista puedes contactarte con nosotros para añadir este producto</p>
                                            </div>
                                            <span className="text-gray-500 text-sm">Ponle un nombre a tu proyecto</span>
                                            <input
                                                type="text"
                                                className="focus:border-none focus:ring-[#B59400] focus:outline-none appearance-none border-[#DFB600] rounded-lg w-full py-2 px-4 text-gray-700 mb-8"
                                                placeholder="Nombre del proyecto"
                                                required
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <span className="text-gray-500 text-sm">Elige el producto</span>
                                            <ListBox products={products} selected={selected} setSelected={setSelected} />
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#DFB600] text-base font-medium text-white hover:bg-[#B59400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#B59400] sm:text-sm"
                                                onClick={(e) => handleSubmit(e)}
                                            >
                                                Guardar proyecto
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
