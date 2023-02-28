import { onProductsLoadingFinished, onProductsLoadingStart } from './own-design-slice';
import { getProductsOwnDesign } from "./api";
import {AppDispatch} from "./types";

export const fetchProductsOwnDesign = () => async (dispatch: AppDispatch) => {
  dispatch(onProductsLoadingStart());

  const { data } = await getProductsOwnDesign();
  console.log(data);

  dispatch(onProductsLoadingFinished(data));
};