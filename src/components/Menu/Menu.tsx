import React from 'react';
import './Menu.css';

import { SearchItem } from 'components/Search/SearchResults';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { Favourites } from 'redux/reducers/jokesReducer';
import { closeMenu } from 'redux/actions/menuActions';
import { Heart } from 'components/Search/SearchResults/Item/Heart';

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
        <div 
            className="menu__outer"
        >
            <div className="menu__inner">

                <div className={cls.join(" ")} >

                    <div className="menu__title">
                        Favourite
                    </div>

                    <div className="menu__list" >
                                    {
                                        favourites.length 
                                            ?   favourites.map( item => (
                                                    <SearchItem key={item.id} item={item} favourite />
                                                ) )

                                            :   <div className="menu__message" >
                                                    Favourite list is empty. 
                                                    Click to { <Heart clear /> } to add. 
                                                </div>
                                    }
                    </div>

                </div>
                
                <div 
                    className={"menu-backdrop" + (show ? " menu-backdrop_show" : "")} 
                    onClick={closeHandler}
                />
            </div>

        </div>
    )
};

export { Menu };