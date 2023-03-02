import reducer from "./product-id-slice";
import * as productsSelectors from "./selectors";
import * as productsOperations from "./thunk";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ApplicationState} from "./types";
import { TypedUseSelectorHook } from "react-redux";

export { productsSelectors, productsOperations };

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;

export default reducer;
