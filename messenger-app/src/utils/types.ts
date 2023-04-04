
export enum InputFields {
    PASSWORD = 'passwordField',
    USERNAME = 'usernameField',
    CONFIRM_PASSWORD = 'confirmPasswordField'
};

export type Chat = {
    id: string;
    recipient: string;
    lastUpdated: number;
};

export type Message = {
    sender: string;
    recipient: string;
    message: string;
    timestamp: number;
}

export interface PasswordFieldProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}