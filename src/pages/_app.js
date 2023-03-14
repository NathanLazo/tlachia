import '@styles/globals.css';
import '@styles/NotFound.css';
import Head from 'next/head';
import { AuthProvider } from '@hooks/useAuth';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="description" content="Tlachia Blockchain" />
                <link rel="icon" href="/favicon.ico" />
                <title>Tlachia</title>
            </Head>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </>
    );
}

export default MyApp;
