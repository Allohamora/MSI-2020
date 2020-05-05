import React from 'react';
import './index.css';

interface ModalProps {
    children?: React.ReactNode,
    favourite?: boolean,
    show: boolean,
};

const Modal = (props: ModalProps) => {

    const {children, favourite, show} = props;
    
    const cls = [ "modal" ];

    if( favourite ) cls.push("modal_favourite");
    if( show ) cls.push("modal_show");

    return (
        <div className={cls.join(" ")} >
            test
            {
                children
            }
        </div>
    );
};

export { Modal };