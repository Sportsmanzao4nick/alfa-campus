import { ApplicationState } from "../types";

export const getCart = (state: ApplicationState) => state.cart;

export const getTotalQuantity = (state: ApplicationState) => getCart(state).totalQuantity;

export const getTotalPrice = (state: ApplicationState) => getCart(state).totalPrice;

export const getDeliveryPrice = (state: ApplicationState) => getCart(state).deliveryPrice;

export const getTotalPriceWithDelivery = (state: ApplicationState) => getCart(state).totalPriceWithDelivery;

export const getCustomerInfo = (state: ApplicationState) => getCart(state).customerInfo;