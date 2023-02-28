import reducer from "./product-id";
import * as productsSelectors from "./selectors";
import * as productsOperations from "./operations";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ApplicationState, AppState } from "./types";
import { TypedUseSelectorHook } from "react-redux";

export { productsSelectors, productsOperations };

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default reducer;
