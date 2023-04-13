import React, { createContext, useState } from 'react';

export const myContext = createContext();

const DataProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [input, setInput] = useState("")

    return (
        <myContext.Provider value={{ setLogin, setInput, input, login }}>
            {children}
        </myContext.Provider>
    )
}
export default DataProvider;