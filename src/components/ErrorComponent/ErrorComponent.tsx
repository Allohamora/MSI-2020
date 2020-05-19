import React from 'react';
import './ErrorComponent.css';

interface ErrorComponentProps {
    text: string,
    show?: boolean,
    padding?: boolean,
};

const ErrorComponent = (props: ErrorComponentProps) => {
    const { text, show, padding } = props;

    const cls = ["error"];

    if( show ) cls.push("error_show");
    if( padding ) cls.push("error_padding");

    return (
        <div 
            className={cls.join(" ")} 
        >
            {text}
        </div>
    );
};

export { ErrorComponent };