import {ApplicationState} from "./types";

export const getProduct = (state: ApplicationState ) =>state.product;

export const getProductsIsLoading = (state: ApplicationState) => getProduct(state).isLoading;

export const getProductsHasError = (state: ApplicationState) => getProduct(state).hasError;

export const getCurrentProduct = (state: ApplicationState) => getProduct(state).currentProduct;


