import React from 'react';
import './Search.css';

import { SearchForm } from './SearchForm';

interface SearchProps {

};

const Search = (props: SearchProps) => {
    return (
        <div className="search" >
            <div className="search__text-wrap">
                <h2 className="search__title">
                    Hey!
                </h2>
                <p className="search__text">
                    Let's try to find a joke for you:
                </p>
            </div>
            <SearchForm />
        </div>
    );
};

export { Search };