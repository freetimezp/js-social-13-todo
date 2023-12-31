import React, { useState, useContext } from 'react';

import Form from './Form';
import Cards from './Cards';

import './Home.css';

import { context } from '../context/Context';

const Home = () => {
    const { createMode } = useContext(context);

    return (
        <div className='w-screen h-screen'>
            <div className={`w-screen h-screen bg fixed ease-in-out transition-all duration-300 
                ${createMode ? "bg-top" : "scale-150"}`}></div>

            <div className='relative mx-auto flex flex-col items-center justify-between gap-10'>
                <Form
                    className={`${createMode ? "" : "translate-y-[-20.5rem] md:translate-y-[-16rem]"} 
                                    ease-in-out duration-300 transition-all`}
                />
                <Cards
                    className={`${createMode ? "opacity-0" : "translate-y-[-16rem] opacity-100"} 
                                    ease-in-out duration-300 transition-all`}
                />
            </div>
        </div>
    );
};

export default Home;
