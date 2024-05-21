import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const loginCtx = () => setIsAuthenticated(true);
    const logoutCtx = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('userSession');  // Limpiar el localStorage al cerrar sesión
    };

    useEffect(() => {
        const userSession = localStorage.getItem('userSession');
        if (userSession) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginCtx, logoutCtx }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
