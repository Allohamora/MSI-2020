import React from 'react';
import './Menu.css';

import { SearchItem } from 'components/Search/SearchResults';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { Favourites } from 'redux/reducers/jokesReducer';

interface MenuProps {
    show: boolean,
};

const Menu = (props: MenuProps) => {

    const {show} = props;
    const favourites = useSelector<RootState, Favourites>( state => state.jokes.favourites );
    const cls = [ "menu" ];

    if(show) cls.push("menu_show");

    return (
        <div className={cls.join(" ")} >
            <div className="menu__list" >
                {
                    Array.from(favourites).map( item => (
                        <SearchItem key={item.id} item={item} favourite />
                    ) )
                }
            </div>
        </div>
    )
};

export { Menu };