import {ApplicationState} from "./types";

export const getProducts = (state: ApplicationState ) =>state.products;

export const getProductsList = (state: ApplicationState) => getProducts(state).list;

export const getProductsIsLoading = (state: ApplicationState) => getProducts(state).isLoading;

export const getProductsHasError = (state: ApplicationState) => getProducts(state).hasError;

// export const getCurrentProduct = (state: ApplicationState) => state.products;


