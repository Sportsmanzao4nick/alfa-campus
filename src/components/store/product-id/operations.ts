import { onProductsLoadingFinished, onProductsLoadingStart } from './product-id';
import { getProductsWithID } from "./api";
import {AppDispatch} from "./types";

export const fetchProductsWithID = (id: string| number) => async (dispatch: AppDispatch) => {
  dispatch(onProductsLoadingStart());

  const { data } = await getProductsWithID(id);
  console.log('eto data fetch', data)

  dispatch(onProductsLoadingFinished(data));
};