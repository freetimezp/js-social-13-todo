import React, { useContext } from 'react';

import { BsChevronCompactDown } from 'react-icons/bs';

import { context } from '../context/Context';

const Form = ({ className }) => {
    const {
        setCreateMode,
        title,
        setTitle,
        des,
        setDes,
        createTodo,
        editTodo,
        goToEditMode,
        editMode
    } = useContext(context);

    return (
        <div className={`${className} flex flex-col items-center bg-gradient-to-r
        from-[#5e88c8] to-[#7dcbef] p-10 pb-3 xl:w-[40rem] md:rounded-b-2xl 
        md:w-[30rem] w-full opacity-75`} >
            <div className='flex flex-col items-center w-full gap-3'>
                <form
                    className='w-full grid grid-cols-12 gap-5'
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (editMode) {
                            editTodo()
                        } else {
                            createTodo();
                        }
                    }}
                >
                    <input
                        type="text"
                        id="title"
                        className="bg-white border rounded-lg block w-full p-2.5
                         border-gray-600 placeholder-gray-400 text-gray-900 
                         outline-none col-span-12 md:col-span-9"
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />

                    <button className='hidden md:block col-span-3 bg-[#21A656] shadow-md px-3 py-4
                        rounded-lg text-white'
                        type='submit'
                    >
                        {editMode ? 'Update' : 'Create'}
                    </button>

                    <textarea className="bg-white border rounded-lg block w-full 
                    p-2.5 border-gray-600 placeholder-gray-400  text-gray-900 
                    outline-none col-span-12"
                        placeholder="Description"
                        rows={5}
                        onChange={(e) => setDes(e.target.value)}
                        value={des}
                    >
                    </textarea>
                    <button className='block md:hidden col-span-12 bg-[#21A656] shadow-md px-3 py-4
                        rounded-lg text-white'
                        type='submit'
                    >
                        {editMode ? 'Update' : 'Create'}
                    </button>
                </form>

                <BsChevronCompactDown
                    className='text-3xl text-white cursor-pointer'
                    onClick={() => {
                        setCreateMode(e => !e);
                    }}
                />
            </div>
        </div >
    );
};

export default Form;
