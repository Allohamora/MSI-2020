import React from 'react';
import "./Main.css";

import { Menu } from 'components/Menu';
import { Search, SearchResults } from 'components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { closeMenu, openMenu } from 'redux/actions/menuActions';

interface MainProps {

};

const Main = (props: MainProps) => {
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

    const closeHandler = ( e: React.MouseEvent<HTMLDivElement, MouseEvent> ) => {
        console.log(1);
        dispatch( closeMenu() );
    }

    return (
        <div className="main">

            <div className="header">
                <h1 className="header__title" >MSI 2020</h1>

                <div className="favourite" >
                    
                    <button className="favourite__button" onClick={clickHandler} >
                        <span className={iconCls.join(" ")} />
                        <span className="favourite__title" >Favourite</span>
                    </button>

                </div>
            </div>

            <Menu show={open} closeHandler={closeHandler} />

            <Search />

            <SearchResults />
        </div>
    );
};

export { Main };