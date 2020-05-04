import React, { useState } from 'react';
import { List } from '../List';
import "./index.css";

interface HeaderProps {

};

const Header = (props: HeaderProps) => {

    const [active, setActive] = useState<boolean>(false);

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setActive( !active );
    };

    return (
        <div className="header">
            <h1 className="header__title" >MSI 2020</h1>

            <div className={ "favourite" + (active ? " active" : "") } >
                <button onClick={clickHandler} className="favourite__button" />
                <span className="favourite__title" >Favourite</span>
            </div>
            {
                    active && <List modal />
            }
        </div>
    );
};

export { Header };