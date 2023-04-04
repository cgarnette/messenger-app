import React, { useState } from 'react';
import './styles.css';
import { PasswordFieldProps } from '../utils/types';

/**
 * This will be a component for rendering a password entry field along with a toggle for whether or not text should be hidden.
 * 
 * @param placeholder: What should the field display before a value is entered
 * @param value: What value should be in the field
 * @param onChange: a function that takes the latest text input from the password field.
 * @returns 
 */
export const PasswordField: React.FC<PasswordFieldProps> = ({ placeholder, value, onChange}) => {
    // Managing state of password visibility
    const [isTextVisible, setTextVisible] = useState<boolean>(false);

    return (
        <div className="password-field-container">
            <input placeholder={placeholder} type={isTextVisible ? 'text' : 'password'}  onChange={onChange} value={value}/>
            <span onClick={() => setTextVisible(!isTextVisible)}>{isTextVisible ? 'Hide' : 'Show'}</span>
        </div>
    );
};