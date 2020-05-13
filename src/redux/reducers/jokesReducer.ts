import { JOKES_SET_CATEGORIES, JOKES_SET_JOKES } from "redux/types";

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
export type Categories = string[] | null;

export interface JokesState {
    jokes: Jokes,
    categories: Categories,
}

const initState: JokesState = { jokes: null, categories: null };

type Action = { type: typeof JOKES_SET_CATEGORIES, categories: Categories }
            | { type: typeof JOKES_SET_JOKES, jokes: Jokes };

export const jokesReducer = ( state: JokesState = initState, action: Action ): JokesState => {
    switch(action.type){
        case "JOKES_SET_CATEGORIES":
            return {...state, categories: action.categories};
        case "JOKES_SET_JOKES":
            return {...state, jokes: action.jokes};
        default:
            return {...state};
    }
}