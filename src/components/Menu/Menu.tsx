import React from 'react';
import './Menu.css';

import { SearchItem } from 'components/Search/SearchResults';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { Favourites } from 'redux/reducers/jokesReducer';
import { closeMenu } from 'redux/actions/menuActions';

interface MenuProps {

};

const Menu = (props: MenuProps) => {

    const show = useSelector<RootState, boolean>( state => state.menu.open );
    const favourites = useSelector<RootState, Favourites>( state => state.jokes.favourites );
    const dispatch = useDispatch();

    const closeHandler = (e: React.MouseEvent< HTMLDivElement, MouseEvent >) => {
        dispatch(closeMenu());
    }

    const cls = [ "menu" ];
    if(show) cls.push("menu_show");

    return (
        <>
            <div className={cls.join(" ")} >

                <div className="menu__title">
                    Favourite
                </div>

                <div className="menu__list" >
                    {
                        favourites.map( item => (
                            <SearchItem key={item.id} item={item} favourite />
                        ) )
                    }
                </div>

            </div>
            
            <div 
                className={"menu-bg" + (show ? " menu-bg_show" : "")} 
                onClick={closeHandler}
            />
        </>
    )
};

export { Menu };