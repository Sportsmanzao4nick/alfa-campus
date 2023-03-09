import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";

const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cart.findIndex((item) => {
        const keys = Object.keys(item);
        const sameKeys = keys.filter((key) => itemToAdd.hasOwnProperty(key));
        return sameKeys.every((key) => item[key] === itemToAdd[key]);
      });

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
        state.cart.push({ ...itemToAdd, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const itemToInc = action.payload;
      const itemIndex = state.cart.findIndex((item) => {
        const keys = Object.keys(item);
        const sameKeys = keys.filter((key) => itemToInc.hasOwnProperty(key));
        return sameKeys.every((key) => item[key] === itemToInc[key]);
      });

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemToDec = action.payload;
      const itemIndex = state.cart.findIndex((item) => {
        const keys = Object.keys(item);
        const sameKeys = keys.filter((key) => itemToDec.hasOwnProperty(key));
        return sameKeys.every((key) => item[key] === itemToDec[key]);
      });

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity--;
        if (state.cart[itemIndex].quantity === 0) {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    removeItem: (state, action) => {
      const itemToRem = action.payload;
      const itemIndex = state.cart.findIndex((item) => {
        const keys = Object.keys(item);
        const sameKeys = keys.filter((key) => itemToRem.hasOwnProperty(key));
        return sameKeys.every((key) => item[key] === itemToRem[key]);
      });
      state.cart.splice(itemIndex, 1);
    },
    getTotalQuantity: (state) => {
      state.totalQuantity = state.cart.reduce(
        (total, product) => total + product.quantity,
        0
      );
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotalQuantity,
  getTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;
