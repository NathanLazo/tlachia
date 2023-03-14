import React from 'react';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, CurrencyDollarIcon } from '@heroicons/react/outline';
import Title from './Title';
import AboutText from './About';

const items = [
    {
        name: 'Trazabilidad',
        description: 'A través de nuestra plataforma podrás realizar el seguimiento de los procesos de tu empresa en tiempo real.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Valor',
        description: 'Gracias a la certificación en blockchain podrás darle un valor agregado a tus productos.',
        icon: CurrencyDollarIcon,
    },
    {
        name: 'Velocidad',
        description: 'Las altas, bajas y modificaciones son instantáneas, por lo que no tendrás que preocuparte por tiempos de respuesta.',
        icon: LightningBoltIcon,
    },
    {
        name: 'Notificaciones',
        description: 'Recibe notificaciones en tu teléfono móvil cuando se realice un trazado de tu empresa.',
        icon: AnnotationIcon,
    },
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Title /> {/* Title component */}
            <AboutText items={items} /> {/* About text component / we pass data from: "items" array to make it look clean and fast modification */}
        </div>
    );
};

export default About;
