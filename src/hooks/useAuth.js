import React, { useState, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Cookie from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = useAuthProvider();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

const useAuthProvider = () => {
    const router = useRouter();
    const [authPassed, setAuthPassed] = useState(false);
    const [userId, setUserId] = useState('');
    const cookieJWT = Cookie.get('TLACHIA_JWT');

    // If user expires token, redirect to login - TODO: I want a better way to have protected routes
    const redirectToLogin = () => {
        if (router.pathname !== '/' && router.pathname !== '/qr' && router.pathname !== '/login' && router.pathname !== '/signup' && router.pathname !== '/transactions') {
            router.push('/login');
        }
    };

    // every change of route check if JWT is valid
    useEffect(() => {
        verifyCookie();
    }, [router.pathname]);

    const verifyCookie = () => {
        axios.post('/api/verifyJwt', { jwt: cookieJWT }).then(function (response) {
            if (response.data.jwtDecoded?.userId != null && response.data.auth) {
                var exp = response.data.jwtDecoded.exp * 1000;
                if (new Date() > new Date(exp)) {
                    setAuthPassed(false);
                    setUserId('');
                    redirectToLogin();
                } else {
                    setUserId(response.data.jwtDecoded.userId);
                    setAuthPassed(true);
                }
            } else {
                setAuthPassed(false);
                setUserId('');
                redirectToLogin();
            }
        });
    };

    // Set cookie with JWT on login
    const postCookie = (userID) => {
        const claims = { userId: userID };
        axios
            .post('/api/jwt', {
                claims,
            })
            .then(function (response) {
                Cookie.set('TLACHIA_JWT', response.data.jwt, { secure: true, expires: 1, sameSite: 'strict' });
            });
    };

    // Remove cookie on logout
    const signOut = () => {
        Cookie.remove('TLACHIA_JWT');
        setAuthPassed(false);
        setUserId('');
        window.location.href = '/';
    };

    return {
        authPassed,
        userId,
        postCookie,
        signOut,
    };
};
