import React, { useState } from 'react';
import "./Main.css";

import { Menu } from 'components/Menu';
import { Search, SearchResults } from 'components/Search';

interface MainProps {

};

const Main = (props: MainProps) => {
    const [active, setActive] = useState<boolean>(false);

    const iconCls = ["favourite__icon"];
    if( active ) iconCls.push("favourite__icon_active");

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setActive( !active );
    };

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

            <Menu show={active} />

            <Search />

            <SearchResults />
        </div>
    );
};

export { Main };