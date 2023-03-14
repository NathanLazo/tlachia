import React from 'react';
import Content from './Content';
import Background from './Background';

const Hero = () => {
    return (
        <>
            <Background /> {/* Background component / just an image */}
            <Content /> {/* Content component / title, text, image and button */}
        </>
    );
};

export default Hero;
