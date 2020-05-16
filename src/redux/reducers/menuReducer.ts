import { MENU_OPEN, MENU_CLOSE } from "redux/types"

export interface MenuState {
    open: boolean,
};

const initState: MenuState = {
    open: false,
}

type Action = { type: typeof MENU_OPEN }
            | { type: typeof MENU_CLOSE };

export const menuReducer = ( state: MenuState = initState, action: Action ) => {
    switch( action.type ){
        case "MENU_CLOSE":
            return {...state, open: false};
        case "MENU_OPEN":
            return {...state, open: true};
        default:
            return {...state};
    }
}