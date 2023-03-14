import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { client } from '@lib/sanityClient';
import toast from 'react-hot-toast';
import { useAuth } from '@hooks/useAuth';
import axios from 'axios';
import Link from 'next/link';

const Forms = () => {
    const formRef = useRef(null);
    const router = useRouter();
    const { postCookie, authPassed, userId } = useAuth();

    useEffect(() => {
        // If user is logged in, redirect to dashboard
        if (authPassed) {
            router.push(`/dashboard/home/${userId}`);
        }
    }, [authPassed, router, userId]);

    // Gather form data
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            remember_me: formData.get('remember-me'),
        };
        fetchUser(data);
    };

    // Fetch user from sanity database and validate if exists
    const fetchUser = async (data, SanityClient = client) => {
        const query = `*[_type == "users" && email == "${data.username}"] {
            "id": _id,
            "email": email,
            "name": name,
        }`;

        // TODO: Hay que validar con un captcha para evitar bots o ataque DDoS
        toast.promise(
            SanityClient.fetch(query).then((user) => {
                if (user.length > 0) {
                    verifyPassword(data, user[0]);
                } else {
                    throw new Error('Usuario o contraseña incorrectos');
                }
            }),
            {
                loading: 'Validando...',
                success: 'Valido',
                error: (err) => err.message,
            },
        );
    };

    const verifyPassword = async (data, user) => {
        toast.promise(
            axios
                .post('/api/comparePassword', {
                    password: data.password,
                    userId: user.id,
                })
                .then((response) => {
                    const result = response.data.result;
                    if (result) {
                        postCookie(user.id);
                        router.push(`/dashboard/home/${user.id}`);
                    } else {
                        throw new Error('Usuario o contraseña incorrectos');
                    }
                }),
            {
                loading: 'Ingresando...',
                success: `Bienvenido ${user.name}`,
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
                            id="username"
                            name="username"
                            type="text"
                            placeholder="user@example.com"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DFB600] focus:border-[#DFB600] sm:text-sm"
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
                            autoComplete="current-password"
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#DFB600] focus:border-[#DFB600] sm:text-sm"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-[#DFB600] focus:ring-[#c7a50c] border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <Link href="#">
                            <div className="font-medium text-[#DFB600] hover:text-[#B59400]">Forgot your password?</div>
                        </Link>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#DFB600] hover:bg-[#B59400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DFB600]"
                    >
                        Sign in
                    </button>
                </div>
            </form>
        </>
    );
};

export default Forms;
