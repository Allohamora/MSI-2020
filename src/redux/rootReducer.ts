import { jokesReducer, JokesState } from "./reducers/jokesReducer";
import { combineReducers } from "redux";

export interface RootState {
    jokes: JokesState
};

export const rootReducer = combineReducers({
    jokes: jokesReducer,
});