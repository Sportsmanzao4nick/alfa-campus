import {ApplicationState} from "./types";

export const getProducts = (state: ApplicationState ) =>state.products;

export const getProductsListMadeInAlfa = (state: ApplicationState) => getProducts(state).listMadeInAlfa;

export const getProducstListOwnDesign = (state:ApplicationState) => getProducts(state).listOwnDesign

export const getProductsIsLoading = (state: ApplicationState) => getProducts(state).isLoading;

export const getProductsHasError = (state: ApplicationState) => getProducts(state).hasError

