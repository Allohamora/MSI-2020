import React from 'react';
import './SearchResults.css';

import { Item } from "./Item";
import { useSelector } from 'react-redux';
import { rootState } from 'redux/rootReducer';
import { Jokes } from 'redux/reducers/jokesReducer';

interface SearchResultsProps {

};

const SearchResults = (props: SearchResultsProps) => {

    const results = useSelector<rootState, Jokes>(state => state.jokes.jokes);

    return (
        <ul className="results" >
            {
                results && results.map( item => (
                    <Item {...item} key={item.id} />
                ) )
            }
        </ul>
    );
};

export { SearchResults };