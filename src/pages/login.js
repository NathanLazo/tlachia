import React from 'react';
import Login from '../containers/log/Login';
import { useEffect } from 'react';

const Log = () => {
    useEffect(() => {
        window.ethereum.request({ method: 'eth_requestAccounts' });
    }, []);
    return (
        <>
            <Login />
        </>
    );
};

export default Log;
