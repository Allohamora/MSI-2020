import React from 'react';
import './Input.css';

interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
};

const Input = (props: InputProps) => {

    const {onChange, placeholder} = props;

    return (
        <input 
            type="text" 
            className="form__input" 
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

export { Input };