import React from 'react';

import Form from './Form';
import Cards from './Cards';

import './Home.css';

const Home = () => {
    return (
        <div className='w-screen h-screen'>
            <div className='w-screen h-screen bg bg-top fixed'></div>

            <div className='relative mx-auto flex flex-col items-center justify-between gap-10'>
                <Form />
                <Cards />
            </div>
        </div>
    );
};

export default Home;
