import React from 'react';
import './Button.css';

interface ButtonProps {
    text?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    active?: boolean,
    selector?: boolean,
};

const Button = (props: ButtonProps) => {

    const {text, onClick, active, selector} = props;

    const cls = ["btn"];

    if( selector ) {
        cls.push("btn_selector");
    } else {
        cls.push("btn_primary");
    }


    if( active ) cls.push("btn_active");

    return (
        <button 
            className={cls.join(" ")}
            onClick={ onClick } 
        >
            { text }
        </button>
    );
};

export { Button };