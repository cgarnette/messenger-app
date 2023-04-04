import React, { useContext, useState } from 'react';
import { PasswordField } from '../../components/PasswordField';
import './styles.css'
import { AuthContext } from '../../components/AuthWrapper';
import { InputFields } from '../../utils/types';

export const Login: React.FC<{}> = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authenticate } = useContext(AuthContext);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: InputFields) => {
        if (field === InputFields.USERNAME) {
            setUsername(e.target.value);
        } else if (field === InputFields.PASSWORD) {
            setPassword(e.target.value);
        }
    };

    const clearFields = () => {
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-page">
            <div>
                <h2>Sign In</h2>
            </div>
            <div className="login-fields-container">
                <input className='username-entry' placeholder='Username' type='text' onChange={(e) => handleChange(e, InputFields.USERNAME)} value={username}/>
                <PasswordField placeholder='Password' onChange={(e) => handleChange(e, InputFields.PASSWORD)} value={password}/>
            </div>

            <div className="action-btn-container">
                <button type='submit' onClick={() => authenticate(username, password)}>Submit</button>
                <button onClick={clearFields}>Clear</button>
            </div>
        </div>
    );
};