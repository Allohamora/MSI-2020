import React from 'react';
import './SearchResults.css';

import { Item } from "./Item";
import { useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { Jokes, Favourites } from 'redux/reducers/jokesReducer';

interface SearchResultsProps {

};

const SearchResults = (props: SearchResultsProps) => {

    const results = useSelector<RootState, Jokes>(state => state.jokes.jokes);
    const favourites = useSelector<RootState, Favourites>(state => state.jokes.favourites);

    return (
        <ul className="results" >
            {
                results && results.map( item => (
                    <Item 
                        item={item} 
                        key={item.id} 
                        favourite={!!favourites.find( joke => item.id === joke.id )} 
                    />
                ) )
            }
        </ul>
    );
};

export { SearchResults };