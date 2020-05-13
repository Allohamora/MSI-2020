import React, { useState } from 'react';
import './Item.css';

import { Joke } from 'redux/reducers/jokesReducer';

import heart from "./heart.png";
import heartFull from "./heartFull.png";
import link from "./link.png"
import message from "./message.png";
import { Button } from 'components/Button';

interface ItemProps extends Joke {

};

const Item = (props: ItemProps) => {

    const { id, url, value, updated_at, categories } = props;

    const [full, setFull] = useState(false);

    const stamp = Date.now() - new Date(updated_at).getTime();
    const hours = Math.floor(stamp / (60 * 60 * 1000));

    return (
        <div className="item">
            <div className="avatar">
                <img src={message} alt="avatar" className="avatar__img"/>
            </div>
            <div className="item__content">
                <div className="id__wrapper">
                    ID: <a href={url} className="id">{id} <img src={link} className="id__img" alt="link"/></a>
                </div>
                <div className="item__text">
                    { value }
                </div>
                <div className="item__update">
                    Last update {hours} hours ago
                </div>
                <div className="item__categories">
                {
                    categories.map( category => (
                        <Button 
                            selector 
                            div
                            hover
                            withoutBorder
                            key={category}
                            text={category}
                        />
                    ) )
                }
            </div>
            </div>
            <img 
                src={full ? heartFull : heart} 
                alt="hearth" 
                className="item__hearth"
                onClick={e => setFull(!full)}
            />
        </div>
    );
};

export { Item };