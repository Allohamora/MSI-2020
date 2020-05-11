import React, { createContext } from 'react';
import './Form.css';

import { useId } from 'hooks/useId';
import { Input } from './Input';
import { Radio } from './Radio';

export const NameContext = createContext("");

interface FormProps {
    children?: React.ReactNode,

    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
    className?: string,
};

const Form = (props: FormProps) => {

    const {children, onSubmit, className} = props;

    // useId, and rename it to name.
    const { id: name } = useId("form");

    return (
        <form 
            className={"form" + (className ? " " + className : "")} 
            name={name} 
            onSubmit={onSubmit}
        >
            <NameContext.Provider value={name} >
                {
                    children
                }
            </NameContext.Provider>
        </form>
    );
};

Form.Radio = Radio;
Form.Input = Input;

export { Form };