import products from "./products-list";
import product from "./product-id";
import cart from "./cart";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: products,
    product: product,
    cart: cart,
  },
});
