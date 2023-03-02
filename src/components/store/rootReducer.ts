import products from "./products-list";
import product from "./product-id"
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    products: products,
    product: product
  },
  middleware: [thunk],
});
