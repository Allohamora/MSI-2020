import React from 'react';
import "./Main.css";

import { Search, SearchResults } from 'components/Search';
import { Favourite } from './Favourite';

interface MainProps {

};

const Main = (props: MainProps) => {

    return (
        <div className="main">

            <div className="header">
                <h1 className="header__title" >MSI 2020</h1>

                <Favourite />
            </div>

            <Search />

            <SearchResults />
        </div>
    );
};

export { Main };