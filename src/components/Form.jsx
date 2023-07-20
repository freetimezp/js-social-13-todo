import React from 'react';

import { BsChevronCompactDown } from 'react-icons/bs';

const Form = () => {
    return (
        <div className='flex flex-col items-center bg-gradient-to-r
        from-[#5e88c8] to-[#7dcbef] p-10 pb-3 w-[35rem] rounded-b-2xl'>
            <div className='flex flex-col items-center w-full gap-3'>
                <form className='w-full grid grid-cols-12 gap-5'>
                    <input
                        type="text"
                        id="title"
                        class="bg-white border rounded-lg block w-full p-2.5
                         border-gray-600 placeholder-gray-400 text-gray-900 
                         outline-none col-span-9"
                        placeholder="Title"
                    />
                    <button className='col-span-3 bg-[#21A656] shadow-md px-3 py-4
                    rounded-lg text-white'>
                        Create
                    </button>

                    <textarea class="bg-white border rounded-lg block w-full 
                    p-2.5 border-gray-600 placeholder-gray-400  text-gray-900 
                    outline-none col-span-12"
                        placeholder="Description"
                        rows={5}>
                    </textarea>
                </form>

                <BsChevronCompactDown className='text-3xl text-white cursor-pointer' />
            </div>
        </div>
    );
};

export default Form;
