import React from 'react';
import Content from './Content';
import Title from './Title';

const Pricing = () => {
    return (
        <>
            <div className="lg:flex items-center justify-between">
                <Title /> {/* Title component */}
                <Content /> {/* Prices component */}
            </div>
        </>
    );
};

export default Pricing;
