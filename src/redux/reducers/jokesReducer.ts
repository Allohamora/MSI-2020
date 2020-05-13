import { JOKES_SET_CATEGORIES, JOKES_SET_JOKES, JOKES_ADD_FAVOURITE, JOKES_REMOVE_FAVOURITE } from "redux/types";

export interface Joke {
    categories: string[],
    created_at: string,
    icon_url: string,
    id: string,
    updated_at: string,
    url: string,
    value: string
}

export type Jokes = Joke[] | null;
export type Favourites = Joke[];
export type Categories = string[] | null;

export interface JokesState {
    jokes: Jokes,
    favourites: Favourites,
    categories: Categories,
}

const getted = localStorage.getItem("favourites");

const initState: JokesState = { 
    jokes: null,
    favourites: getted ? JSON.parse(getted) : [],
    categories: null 
};

type Action = { type: typeof JOKES_SET_CATEGORIES, categories: Categories }
            | { type: typeof JOKES_SET_JOKES, jokes: Jokes }
            | { type: typeof JOKES_ADD_FAVOURITE, joke: Joke }
            | { type: typeof JOKES_REMOVE_FAVOURITE, joke: Joke };

export const jokesReducer = ( state: JokesState = initState, action: Action ): JokesState => {
    switch(action.type){
        case "JOKES_SET_CATEGORIES":
            return {...state, categories: action.categories};
        case "JOKES_SET_JOKES":
            return {...state, jokes: action.jokes};
        case "JOKES_ADD_FAVOURITE":
            const copy = [...state.favourites];
            copy.push(action.joke);

            localStorage.setItem("favourites", JSON.stringify(copy));

            return {...state, favourites: copy};
        case "JOKES_REMOVE_FAVOURITE":
            const filtered = state.favourites.filter( joke => !(joke.id === action.joke.id));

            localStorage.setItem("favourites", JSON.stringify(filtered));

            return {...state, favourites: filtered };
        default:
            return {...state};
    }
}