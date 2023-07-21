import React from 'react';

import { AiFillCloseCircle } from 'react-icons/ai';
import { RiEditCircleFill } from 'react-icons/ri';

const Cards = ({ className }) => {
    return (
        <div className={`${className} grid grid-cols-12 absolute top-[25rem] w-[60rem]`}>
            <div className='col-span-6'>
                <div className='w-full bg-white bg-opacity-70 flex flex-col 
                gap-3 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <h2 className='text-lg'>Title Ipsum is simply</h2>
                        <div className='flex gap-2'>
                            <RiEditCircleFill className='text-2xl text-[#2AB1CE] opacity-80 hover:opacity-100
                            cursor-pointer hover:scale-105 transition-all duration-300' />
                            <AiFillCloseCircle className='text-2xl text-[#D01010] opacity-80 hover:opacity-100
                            cursor-pointer hover:scale-105 transition-all duration-300' />
                        </div>
                    </div>
                    <p className='text-sm text-opacity-75'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Quidem, suscipit laudantium vitae id deserunt totam quo
                        voluptatem atque corporis. Soluta nam illo, molestiae
                        exercitationem laboriosam voluptate inventore dolorem ut
                        dolores!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cards;
