import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { client } from '@lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';
import PasswordModal from '@components/user-config/PasswordModal';
import axios from 'axios';

const PasswordForm = () => {
    const formRef = useRef(null);
    const router = useRouter();
    const [passConfirmation, setPassConfirmation] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [openPasswordModal, setPasswordModal] = useState(false);
    const [result, setResult] = useState(null);
    const { userId } = router.query;

    const updateProfile = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
        };

        if (data.password === data.password_confirmation) {
            hashPassword(data.password);
            setPasswordModal(true);
        } else {
            toast.error('Las contraseñas no coinciden');
        }
    };

    const hashPassword = async (password) => {
        const res = await axios.post('/api/hashPassword', {
            password: password,
        });
        setNewPassword(res.data.password);
    };

    const patchPassword = () => {
        setResult(false);
        toast.promise(
            client
                .patch(`${userId}`) // Document ID to patch
                .set({
                    password: newPassword,
                }) //merge of document
                .commit(), // Perform the patch and return a promise
            {
                loading: 'Cargando...',
                success: 'Contraseña actualizada',
                error: 'Error al actualizar contraseña',
            },
        );
    };

    useEffect(() => {
        if (result) {
            patchPassword();
        }
    }, [result]);

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
            <PasswordModal setPasswordModal={setPasswordModal} openPasswordModal={openPasswordModal} setResult={setResult} />
            <form className="divide-y divide-gray-200 lg:col-span-9" ref={formRef} onSubmit={updateProfile}>
                <div className="py-6 px-4 sm:p-6 lg:pb-8">
                    <div className="mt-6 flex flex-col lg:flex-row">
                        <div className="flex-grow space-y-6">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Nueva contraseña
                                </label>
                                <div className="mt-1 rounded-md shadow-sm flex">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                        title={`Debe contener:
                                                1 Mayuscula,
                                                1 Minuscula,
                                                1 Numero,
                                                8 Caracteres`}
                                        autoComplete="new-password"
                                        required
                                        onChange={(e) => {
                                            setPassConfirmation(e.target.value);
                                        }}
                                        className="focus:ring-[#B59400] focus:border-[#B59400] flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                                    Confirma la contraseña
                                </label>
                                <div className="mt-1 rounded-md shadow-sm flex">
                                    <input
                                        type="password"
                                        name="password_confirmation"
                                        id="password_confirmation"
                                        hidden={false}
                                        title={`Las contraseñas no coinciden`}
                                        pattern={passConfirmation}
                                        required
                                        className="focus:ring-[#B59400] focus:border-[#B59400] flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>
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

export default PasswordForm;
