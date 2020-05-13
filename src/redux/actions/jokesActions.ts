import { Dispatch } from "redux";
import { Jokes, Categories, Joke } from "redux/reducers/jokesReducer";
import { JOKES_SET_JOKES, JOKES_SET_CATEGORIES, JOKES_ADD_FAVOURITE, JOKES_REMOVE_FAVOURITE } from "redux/types";
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

    switch( type ){
        case "RANDOM":
            searchRandomJoke(dispatch)
            break;
        case "CATEGORY":
            searchByCategory(category)(dispatch);
            break;
        case "SEARCH":
            searchByQuery(query)(dispatch);
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
    const joke = await service.searchByRandom();
    dispatch(setJokesAction([joke]));
};

const searchByQuery = (query: SearchQuery) => async(dispatch: Dispatch) => {
    if( !query ) return;

    const response = await service.searchByQuery(query);
    const jokes = response.result;
    dispatch(setJokesAction(jokes));
}

const searchByCategory = (category: string) => async(dispatch: Dispatch) => {
    if( !category ) return;

    const joke = await service.searchByCategory(category);
    dispatch(setJokesAction([joke]));
}

export const searchCategories = () => async(dispatch: Dispatch) => {
    const categories = await service.getCategories();
    dispatch(setCategoriesAction(categories));
}

const setJokesAction = (jokes: Jokes) => ({
    type: JOKES_SET_JOKES,
    jokes
})

const setCategoriesAction = (categories: Categories) => ({
    type: JOKES_SET_CATEGORIES,
    categories
})