import React from 'react';
import Home from '@containers/home';
import Head from 'next/head';

const Index = () => {
    return (
        <>
            <Head>
                <title>Tlachia - home</title>
                <meta name="description" content="Tlachia home page" />
            </Head>
            <Home /> {/* Landing container */}
        </>
    );
};
export default Index;
