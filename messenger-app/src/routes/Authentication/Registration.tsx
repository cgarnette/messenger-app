import React, { useState } from 'react';
import { PasswordField } from '../../components/PasswordField';
import './styles.css'
import { InputFields } from '../../utils/types';

export const Registration: React.FC<{}> = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirmationField, setPasswordConfirmationField] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: InputFields) => {
        if (field === InputFields.USERNAME) {
            setUsername(e.target.value);
        } else if (field === InputFields.PASSWORD) {
            setPassword(e.target.value);
        } else if (field === InputFields.CONFIRM_PASSWORD) {
            setPasswordConfirmationField(e.target.value);
        }
    };

    const submitRegistration = () => {
        if (passwordConfirmationField !== password) {
            console.log('no match!', password, passwordConfirmationField);
            alert('Confirmation field must match password field');
        }

        console.log('no match here!', password, passwordConfirmationField);
    };

    return (
        <div className="login-page">
            <div>
                <h2>Register</h2>
            </div>
            <div className="login-fields-container">
                <input className='username-entry' placeholder='Username' type='text' onChange={(e) => handleChange(e, InputFields.USERNAME)} value={username}/>
                <PasswordField placeholder='Password' onChange={(e) => handleChange(e, InputFields.PASSWORD)} value={password}/>
                <PasswordField placeholder='Confirm Password' onChange={(e) => handleChange(e, InputFields.CONFIRM_PASSWORD)} value={passwordConfirmationField}/>
            </div>

            <div className="action-btn-container">
                <button onClick={submitRegistration}>Submit</button>
                <button>Cancel</button>
            </div>
        </div>
    );
};