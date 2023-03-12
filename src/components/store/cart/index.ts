import reducer from "./cart-slice";
import * as cartSelectors from "./selectors"
import * as productsOperations from "./thunk"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ApplicationState} from "../types";
import { TypedUseSelectorHook } from "react-redux";

export {cartSelectors, productsOperations};

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default reducer;
