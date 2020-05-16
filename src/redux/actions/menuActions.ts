import { MENU_CLOSE, MENU_OPEN } from "redux/types";

export const closeMenu = () => ({
    type: MENU_CLOSE,
});

export const openMenu = () => ({
    type: MENU_OPEN,
});