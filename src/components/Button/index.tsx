import React, { useState } from 'react';
import './index.css';

interface ButtonProps {
    text?: string,
    children?: React.ReactNode,
    search?: boolean,
};

const Button = (props: ButtonProps) => {

    const {text, children, search} = props;
    const [active, setActive] = useState(false);

    const cls = ["btn"];

    if( search ) {
        cls.push("btn_search");
    } else {
        cls.push("btn_primary");
    }
    if( active ) cls.push("btn_active");

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setActive( !active );
    }

    return (
        <button 
            className={cls.join(" ")}
            onClick={ clickHandler } 
        >
            { text }
            { children }
        </button>
    );
};

export { Button };