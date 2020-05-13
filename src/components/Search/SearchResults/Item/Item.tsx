import React from 'react';
import './Item.css';

import { Joke } from 'redux/reducers/jokesReducer';

import link from "./link.png"
import message from "./message.png";
import { Button } from 'components/Button';
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourits } from 'redux/actions/jokesActions';
import { Heart } from './Heart';

interface ItemProps {
    item: Joke,
    favourite?: boolean,
};

const Item = (props: ItemProps) => {

    const { item, favourite } = props;
    const { id, url, value, updated_at, categories } = item;

    const dispatch = useDispatch();

    const stamp = Date.now() - new Date(updated_at).getTime();
    const hours = Math.floor(stamp / (60 * 60 * 1000));

    const heartHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if( !favourite ) {
            dispatch( addToFavourites(item) );
        } else {
            dispatch( removeFromFavourits(item) );
        }
    }

    return (
        <div className="item" >

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

            <Heart full={favourite} onClick={heartHandler} />

        </div>
    );
};

export { Item };