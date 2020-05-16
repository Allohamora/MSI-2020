import { jokesReducer, JokesState } from "./reducers/jokesReducer";
import { combineReducers } from "redux";
import { MenuState, menuReducer } from "./reducers/menuReducer";

export interface RootState {
    jokes: JokesState,
    menu: MenuState
};

export const rootReducer = combineReducers({
    jokes: jokesReducer,
    menu: menuReducer,
});