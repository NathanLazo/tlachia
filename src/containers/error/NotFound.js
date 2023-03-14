import React from 'react';
import { useRouter } from 'next/router';

const NotFound = () => {
    const router = useRouter();
    return (
        <>
            <div>
                <div className="starsec"></div>
                <div className="starthird"></div>
                <div className="starfourth"></div>
                <div className="starfifth"></div>
            </div>
            <div className="lamp__wrap">
                <div className="lamp">
                    <div className="cable"></div>
                    <div className="cover"></div>
                    <div className="in-cover">
                        <div className="bulb"></div>
                    </div>
                    <div className="light"></div>
                </div>
            </div>
            <section className="error">
                <div className="error__content">
                    <div className="error__message message">
                        <h1 className="message__title">404</h1>
                        <p className="message__text">Lo sentimos, la página que estás buscando no existe.</p>
                    </div>
                    <div className="error__nav e-nav">
                        <button className="e-nav__link" onClick={() => router.back()}>
                            volver
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NotFound;
