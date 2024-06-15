import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
    const [role, setRole] = useState(null);

    useEffect(() => {
        const fetchRole = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user');
                setRole(response.data.role);
            } catch (error) {
                console.error('Ошибка:', error);
            }
        };

        fetchRole();
    }, []);

    return (
        <RoleContext.Provider value={role}>
            {children}
        </RoleContext.Provider>
    );
};

export const useRole = () => {
    return useContext(RoleContext);
};
