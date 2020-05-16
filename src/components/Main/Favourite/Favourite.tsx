import React from 'react';
import './Favourite.css';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { closeMenu, openMenu } from 'redux/actions/menuActions';

interface FavouriteProps {

};

const Favourite = (props: FavouriteProps) => {

    const dispatch = useDispatch();
    const open = useSelector<RootState, boolean>( state => state.menu.open );

    const iconCls = ["favourite__icon"];
    if( open ) iconCls.push("favourite__icon_active");

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        if( open ) {
            dispatch( closeMenu() );
        } else {
            dispatch( openMenu() );
        }
    };

    return (
        <div className="favourite" >
                    
        <button className="favourite__button" onClick={clickHandler} >
            <span className={iconCls.join(" ")} />
            <span className="favourite__title" >Favourite</span>
        </button>

        </div>
    );
};

export { Favourite };