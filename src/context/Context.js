import React, { createContext, useState } from 'react';

export const context = createContext();

const ContextProvider = ({ children }) => {
    const [createMode, setCreateMode] = useState(true);
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    return (
        <context.Provider value={{ createMode, setCreateMode, title, setTitle, des, setDes }}>
            {children}
        </context.Provider>
    );
};

export default ContextProvider;
