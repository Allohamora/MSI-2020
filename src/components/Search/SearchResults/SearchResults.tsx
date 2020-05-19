import React from 'react';
import './SearchResults.css';

import { Item } from "./Item";
import { useSelector } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { Jokes, Favourites, JokesError } from 'redux/reducers/jokesReducer';

interface SearchResultsProps {

};

const SearchResults = (props: SearchResultsProps) => {

    const results = useSelector<RootState, Jokes>(state => state.jokes.jokes);
    const error = useSelector<RootState, JokesError>( state => state.jokes.error );
    const isLoading = useSelector<RootState, boolean>( state => state.jokes.loading );
    const favourites = useSelector<RootState, Favourites>(state => state.jokes.favourites);

    return (
        <ul className="results" >
            {
                isLoading
                    ? <div>Loading...</div>
                    
                    : results &&
                        (results.length
                            ? results.map( item => (
                                    <Item 
                                        item={item} 
                                        key={item.id} 
                                        favourite={!!favourites.find( joke => item.id === joke.id )} 
                                    />
                                ) )
                            : <div>
                                Nothing found.
                            </div>)
            }
            {
                error && <div>{error}</div>
            }
        </ul>
    );
};

export { SearchResults };