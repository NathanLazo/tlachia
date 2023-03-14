import React from 'react';
import Logup from '@containers/log/Logup';
import { useEffect } from 'react';

const Log = () => {
    useEffect(() => {
        window.ethereum.request({ method: 'eth_requestAccounts' });
    }, []);

    return (
        <>
            <Logup />
        </>
    );
};

export default Log;
