import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { client } from '@lib/sanityClient';
import toast from 'react-hot-toast';
import axios from 'axios';
// import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const Forms = () => {
    const router = useRouter();
    const formRef = useRef(null);
    const [pass, setPass] = React.useState('');

    //gather data from form and send to checkEmail() function to validate
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            email: formData.get('email'),
            name: formData.get('name'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation'),
        };
        if (data.password === data.password_confirmation) {
            checkEmail(data);
        } else {
            toast('Las contraseñas no coinciden', { type: 'error' });
        }
    };

    // check if email is already in use, then send data to postData() function to create user
    const checkEmail = (data, SanityClient = client) => {
        const query = `*[_type == "users" && email == "${data.email}"] {
            "email": email,
        }`;
        toast.promise(
            SanityClient.fetch(query).then((emails) => {
                if (emails.length > 0) {
                    throw new Error('El correo ya está registrado');
                } else {
                    postData(data); //create user in DB
                }
            }),
            {
                loading: 'Validando email...',
                success: 'Email valido',
                error: (err) => err.message,
            },
        );
    };

    // create user in Sanity - exception handling - TODO: email verification with 6 digit code
    const postData = async (data) => {
        toast.promise(
            axios
                .post('/api/hashPassword', {
                    password: data.password, // password to hash
                }) // returns hashed password
                .then(async (response) => {
                    const userData = {
                        _type: 'users',
                        email: data.email,
                        name: data.name,
                        password: response.data.password,
                    };
                    try {
                        await client.create(userData); // create user in Sanity
                        router.push('/login');
                    } catch (error) {
                        // error handling
                        if (error.statusCode === 409) {
                            throw new Error('El correo ya está registrado');
                        } else {
                            throw new Error('Error al crear, contactanos para obtener más información');
                        }
                    }
                }),
            {
                loading: 'Registrando...',
                success: 'Registro exitoso',
                error: (err) => err.message,
            },
        );
    };

    return (
        <>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Correo
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="user@example.com"
                            autoComplete="email"
                            required
                            className="appearance-none block w-full px-3 py-2 border-1 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DFB600] focus:border-[#DFB600] sm:text-sm"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nombre de usuario
                    </label>
                    <div className="mt-1">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="user123"
                            autoComplete="name"
                            required
                            className="appearance-none block w-full px-3 py-2 border-1 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DFB600] focus:border-[#DFB600] sm:text-sm"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                        Contraseña
                    </label>
                    <div className="mt-1">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="********"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title={`Debe contener:
                                    1 Mayuscula,
                                    1 Minuscula,
                                    1 Numero,
                                    8 Caracteres`}
                            autoComplete="new-password"
                            required
                            onChange={(e) => {
                                setPass(e.target.value);
                            }}
                            className="tooltip-inner block w-full px-3 py-2 border-1 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DFB600] focus:border-[#DFB600] sm:text-sm"
                        />
                    </div>
                </div>
                <div className="space-y-1">
                    <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
                        Valide su contraseña
                    </label>
                    <div className="mt-1">
                        <input
                            id="password_confirmation"
                            name="password_confirmation"
                            type="password"
                            placeholder="********"
                            autoComplete="current-password"
                            pattern={pass}
                            title={`La contraseña debe coincidir con la anterior`}
                            required
                            className="appearance-none block w-full px-3 py-2 border-1 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DFB600] focus:border-[#DFB600] sm:text-sm"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DFB600] hover:bg-[#B59400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DFB600]"
                    >
                        Sign up
                    </button>
                </div>
            </form>
        </>
    );
};

export default Forms;
