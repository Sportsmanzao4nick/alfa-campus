import { onProductsLoadingFinished, onProductsLoadingStart } from './made-in-alfa-slice';
import { getProductsMadeInAlfa } from "./api";
import {AppDispatch} from "./types";

export const fetchProductsMadeInAlfa = () => async (dispatch: AppDispatch) => {
  dispatch(onProductsLoadingStart());

  const { data } = await getProductsMadeInAlfa();
  console.log(data)

  dispatch(onProductsLoadingFinished(data));
};