import reducer from './own-design-slice';
import * as productsSelectors from './selectors';
import * as productsOperations from './operations'
import {useDispatch} from "react-redux";
import {AppDispatch} from "./types";

export {productsSelectors, productsOperations};

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default reducer;