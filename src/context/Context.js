import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import sweetalert from 'sweetalert2';

export const context = createContext();

const ContextProvider = ({ children }) => {
    const [createMode, setCreateMode] = useState(true);
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [todos, setTodos] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [id, setId] = useState('');

    const resetStates = () => {
        setId('');
        setTitle('');
        setDes('');
    }

    const createTodo = () => {
        const oldTodos = [...todos];

        const newTodo = {
            id: uuidv4(),
            title: title,
            des: des
        };

        oldTodos.push(newTodo);
        setTodos(oldTodos);
        sweetalert.fire('Success', 'Todo Created', 'success');
        resetStates();
    };

    const deleteTodo = (id) => {
        const oldTodos = [...todos];
        const newTodos = oldTodos.filter(i => i.id !== id);
        setTodos(newTodos);
        sweetalert.fire('Deleted success', 'Todo Deleted', 'warning');
        resetStates();
    };

    const editTodo = () => {
        const oldTodos = [...todos];
        const index = oldTodos.findIndex(i => i.id === id);
        oldTodos[index] = {
            id: id,
            title: title,
            des: des
        };
        setTodos(oldTodos);
        sweetalert.fire('Success', 'Todo Edited', 'success');

        resetStates();
        setEditMode(false);
    };

    const goToEditMode = (todo) => {
        setId(todo.id);
        setTitle(todo.title);
        setDes(todo.des);

        setCreateMode(true);
        setEditMode(true);
    }

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
                editTodo,
                todos,
                id,
                setId,
                goToEditMode,
                editMode
            }}
        >
            {children}
        </context.Provider>
    );
};

export default ContextProvider;
