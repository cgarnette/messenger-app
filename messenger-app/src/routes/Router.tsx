import React, { useContext } from 'react';
import { Messenger } from './Messenger';
import { Login, Registration } from './Authentication';
import { AuthContext } from '../components/AuthWrapper';


export const Router: React.FC<{}> = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <>
        {
            isAuthenticated 
            ? <Messenger />
            : <Login />
        }
        </>
    );
};