import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const context = createContext();

const ContextProvider = ({ children }) => {
    const [createMode, setCreateMode] = useState(true);
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [todos, setTodos] = useState([]);

    const createTodo = () => {
        const oldTodos = [...todos];

        const newTodo = {
            id: uuidv4(),
            title: title,
            des: des
        };

        oldTodos.push(newTodo);
        setTitle('');
        setDes('');
        setTodos(oldTodos);
    };

    const deleteTodo = (id) => {
        const oldTodos = [...todos];
        const newTodos = oldTodos.filter(i => i.id !== id);
        setTodos(newTodos);
    };

    return (
        <context.Provider
            value={{
                createMode,
                setCreateMode,
                title,
                setTitle,
                des,
                setDes,
                createTodo,
                deleteTodo,
                todos
            }}
        >
            {children}
        </context.Provider>
    );
};

export default ContextProvider;
