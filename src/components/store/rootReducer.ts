import productsMadeInAlfaReducer from "./made-in-alfa";
import productsOwnDesignReducer from "./own-design"
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import productIDReducer from "./product-id"

export const store = configureStore({
  reducer: {
    productsMadeInAlfa: productsMadeInAlfaReducer,
    productsOwnDesign: productsOwnDesignReducer,
    productID: productIDReducer,
  },
  middleware: [thunk],
});