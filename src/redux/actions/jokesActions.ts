import { Dispatch } from "redux";
import { Jokes, Categories, Joke } from "redux/reducers/jokesReducer";
import { JOKES_SET_JOKES, JOKES_SET_CATEGORIES, JOKES_ADD_FAVOURITE, JOKES_REMOVE_FAVOURITE, JOKES_SET_ERROR, JOKES_SET_LOADING } from "redux/types";
import { ChuckNorris } from "services/chuckNorris";

const service = new ChuckNorris();

export type SearchType = "RANDOM" | "CATEGORY" | "SEARCH";
export type SearchCategory = string;
export type SearchQuery = string;

export const searchAction = (
    type: SearchType,
    category: SearchCategory,
    query: SearchQuery 
) => async(dispatch: Dispatch) => {

    dispatch( setLoading() )

    switch( type ){
        case "RANDOM":
            await searchRandomJoke(dispatch)
            break;
        case "CATEGORY":
            await searchByCategory(category)(dispatch);
            break;
        case "SEARCH":
            await searchByQuery(query)(dispatch);
            break;
    }
}

export const addToFavourites = (joke: Joke) => ({
    type: JOKES_ADD_FAVOURITE,
    joke
});

export const removeFromFavourits = (joke: Joke) => ({
    type: JOKES_REMOVE_FAVOURITE,
    joke
});

const searchRandomJoke = async(dispatch: Dispatch) => {
    try {
        const joke = await service.searchByRandom();
        dispatch(setJokesAction([joke]));
    } catch (e) {
        dispatch( setErrorAction("Error connecting to server, try again later") )
    }
};

const searchByQuery = (query: SearchQuery) => async(dispatch: Dispatch) => {
    try {
        if( !query ) return;
        const response = await service.searchByQuery(query);
        const jokes = response.result;
        dispatch(setJokesAction(jokes));
    } catch(e) {
        dispatch(setErrorAction("Error connecting to server, try again later"));
    }
}

const searchByCategory = (category: string) => async(dispatch: Dispatch) => {
    try {
        if( !category ) return;

        const joke = await service.searchByCategory(category);
        dispatch(setJokesAction([joke]));
    } catch (e) {
        setErrorAction("Error connecting to server, try again later")
    }
}

export const searchCategories = () => async(dispatch: Dispatch) => {
    try {
        const categories = await service.getCategories();
        dispatch(setCategoriesAction(categories));
    } catch(e) {
        setErrorAction("Error connecting to server, try again later");
    }
}

const setErrorAction = (error: string) => ({
    type: JOKES_SET_ERROR,
    error
});

const setJokesAction = (jokes: Jokes) => ({
    type: JOKES_SET_JOKES,
    jokes
})

const setCategoriesAction = (categories: Categories) => ({
    type: JOKES_SET_CATEGORIES,
    categories
})

const setLoading = () => ({
    type: JOKES_SET_LOADING,
})