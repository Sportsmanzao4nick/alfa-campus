import { ApplicationState } from "../types";

export const getCart = (state: ApplicationState) => state.cart;

export const getTotalQuantity = (state: ApplicationState) => getCart(state).totalQuantity;

export const getTotalPrice = (state: ApplicationState) => getCart(state).totalPrice;