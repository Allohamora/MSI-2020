import React from 'react';
import './Heart.css';

import heart from "./heart.png";
import heartFull from "./heartFull.png";

interface HeartProps {
    full?: boolean,
    onClick?: (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
};

const Heart = (props: HeartProps) => {

    const {full, onClick} = props;

    return (
        <img 
            src={full ? heartFull : heart} 
            alt="hearth" 
            className="item__hearth"
            onClick={onClick}
        />
    );
};

export { Heart };