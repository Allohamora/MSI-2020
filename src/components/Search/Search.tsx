import React from 'react';
import { SearchForm } from './SearchForm';
import './Search.css';

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