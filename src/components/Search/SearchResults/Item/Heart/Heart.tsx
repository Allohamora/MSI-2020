import React from 'react';
import './Heart.css';

import heart from "./heart.png";
import heartFull from "./heartFull.png";

interface HeartProps {
    full?: boolean,
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
    clear?: boolean,
};

const Heart = (props: HeartProps) => {

    const {full, onClick, clear} = props;

    const cls: string[] = [];

    if( !clear ) {
        cls.push("item__hearth");
    } 

    return (
        <img 
            src={full ? heartFull : heart} 
            alt="hearth" 
            className={cls.join(" ")}
            onClick={onClick}
        />
    );
};

export { Heart };