import React from 'react';
import './Button.css';

interface ButtonProps {
    text?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    active?: boolean,
    selector?: boolean,
    marginBottom?: boolean,
    div?: boolean,
    withoutBorder?: boolean,
    hover?: boolean,
};

const Button = (props: ButtonProps) => {

    const {
        text, onClick,
        active, selector, 
        marginBottom, div,
        hover, withoutBorder,
    } = props;

    const cls = ["btn"];

    if( selector ) {
        cls.push("btn_selector");
    } else {
        cls.push("btn_primary");
    }

    if( withoutBorder ) cls.push("btn_without-border");
    if( hover ) cls.push("btn_hover");
    if( marginBottom ) cls.push("btn_margin-bottom");


    if( active ) cls.push("btn_active");

    if( div ) {
        return ( <div className={cls.join(" ")} >{text}</div> );
    } 

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