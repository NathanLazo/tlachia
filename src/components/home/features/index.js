/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
import Images from './Images';
import FeaturesText from './Features';

const items = [
    {
        id: 'features-item-1',
        name: '¿Qué es blockchain?',
        description: 'Blockchain puede trazar los procesos de una manera organizada, siendo totalmente transparente, descentralizado y con información inmutable.',
    },
    {
        id: 'features-item-2',
        name: '¿Cómo funciona?',
        description: 'Al hacer un registro, ésta es validada por una serie de nodos distribuidos por todo el mundo, certificando los datos en blockchain.',
    },
    {
        id: 'features-item-3',
        name: '¿Cuándo usar esta plataforma?',
        description: 'Siempre que se desee hacer un registro de un producto o servicio trazable, se puede hacer uso de nuestra plataforma.',
    },
    {
        id: 'features-item-4',
        name: '¿Por qué debería usar blockchain?',
        description: 'La tecnología blockchain certifica los datos y al ser transparente, el consumidor final le da un valor agregado.',
    },
];

const Features = () => {
    return (
        <div id="features" className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
            <FeaturesText items={items} /> {/* Features component / we pass data from: "items" array to make it look clean and fast modification */}
            <Images /> {/* Image component */}
        </div>
    );
};

export default Features;
