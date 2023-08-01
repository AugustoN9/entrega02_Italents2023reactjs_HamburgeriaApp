import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ userLogged, setUserLogged ] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
    
    }, [])

    const loginUser = async (inputValues) => {
        
        const response = await fetch( "https://localhost:3009/auth/login" ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(inputValues)
        });
        const data = await response.json();
        console.log(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');  
        setUserLogged(true);   
    }

    const logoutUser = () => {
        setUserLogged(false);
        localStorage.clear();
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={ {userLogged, loginUser, logoutUser} }>
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider };
