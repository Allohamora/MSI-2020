import React from 'react';
import './Id.css';

import link from "./link.png";

interface IdProps {
    url: string,
    id: string,
};

const Id = (props: IdProps) => {

    const { url, id } = props;

    return (
        <div className="id__wrapper">
            ID: <a href={url} className="id">{id} <img src={link} className="id__img" alt="link"/></a>
        </div>
    );
};

export { Id };