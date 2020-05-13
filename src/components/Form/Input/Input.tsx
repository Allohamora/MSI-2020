import React from 'react';
import './Input.css';

interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    value?: string,
};

const Input = (props: InputProps) => {

    const {onChange, placeholder, value} = props;

    return (
        <input 
            type="text" 
            className="form__input" 
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    );
};

export { Input };