import React, { useContext } from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { RiEditCircleFill } from 'react-icons/ri';

import { context } from '../context/Context';

const Cards = ({ className }) => {
    const { todos, deleteTodo, id, setId, editTodo, goToEditMode } = useContext(context);

    return (
        <div className={`${className} grid grid-cols-12 absolute top-[25rem] w-[20rem] md:w-[60rem] gap-5`}>
            {todos?.map(i => (
                <div className='col-span-12 md:col-span-6' key={i.id}>
                    <div className='w-full bg-white bg-opacity-70 flex flex-col 
                        gap-3 p-5 rounded-lg'>
                        <div className='flex justify-between'>
                            <h2 className='text-lg'>
                                {i.title}
                            </h2>
                            <div className='flex gap-2'>
                                <RiEditCircleFill
                                    className='text-2xl text-[#2AB1CE] opacity-80 hover:opacity-100
                                        cursor-pointer hover:scale-105 transition-all duration-300'
                                    onClick={() => goToEditMode(i)}
                                />
                                <AiFillCloseCircle
                                    className='text-2xl text-[#D01010] opacity-80 hover:opacity-100
                                        cursor-pointer hover:scale-105 transition-all duration-300'
                                    onClick={() => deleteTodo(i.id)}
                                />
                            </div>
                        </div>
                        <p className='text-sm text-opacity-75'>
                            {i.des}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
