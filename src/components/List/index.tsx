import React from 'react';
import "./index.css";

interface ListProps {
    modal?: boolean
};

const List = (props: ListProps) => {

    const cls = [ "list__wrap" ];

    if( props.modal ) cls.push("modal");

    return (
        <div className={cls.join(" ")} >
            Test
        </div>
    );
};

export { List };