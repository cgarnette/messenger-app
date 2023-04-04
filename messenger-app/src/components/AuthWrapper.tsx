import React, { useState, createContext } from 'react';
import { loginRequest } from '../utils/api';

const initialState = {
    isAuthenticated: false,
    authHeader: '',
    username: '',
    authenticate: (...args: any[]) => {}
};

const AuthContext = createContext(initialState);

const AuthWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isAuthenticated, setAuthState] = useState<boolean>(false);
    const [authHeader, setAuthHeader] = useState<string>('');
    const [username, setUsername] = useState<string>('');

    const authenticate = (enteredUsername: string, password: string) => {
        // attempt to authenticate. If successful, setAuthState to true; and set username
        // if unsuccessful, Alert the user
        const encodedAuthCredentials = window.btoa(`${enteredUsername}:${password}`);
        loginRequest(encodedAuthCredentials)
            .then((response) => {
                if (response.status < 400) {
                    setAuthState(true);
                    setAuthHeader(encodedAuthCredentials);
                    setUsername(enteredUsername);
                } else if (response.status === 401) {
                    alert("Invalid credentials. Please try again");
                }
            })
            .catch(() => {
                alert("Login attempt failed. Please try again");
            })
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated, 
            authenticate, 
            authHeader, 
            username
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext };
export default AuthWrapper;