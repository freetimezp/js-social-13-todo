import React from 'react';

import Form from './Form';

import './Home.css';

const Home = () => {
    return (
        <div className='w-screen h-screen'>
            <div className='w-screen h-screen bg bg-top fixed'></div>

            <Form />
        </div>
    );
};

export default Home;
