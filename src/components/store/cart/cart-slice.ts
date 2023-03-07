import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../types";

const initialState = {
  cart: [] as Item[],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) =>
          item.choseColor === itemToAdd.choseColor &&
          item.choseImg === itemToAdd.choseImg &&
          item.choseSize === itemToAdd.choseSize &&
          item.choseSticker === itemToAdd.choseSticker &&
          item.price === itemToAdd.price &&
          item.title === itemToAdd.title
      );

      if (existingItemIndex !== -1) {
        state.cart[existingItemIndex].quantity += 1;
      } else {
        state.cart.push({ ...itemToAdd, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.choseSize === action.payload.choseSize &&
          item.choseSticker === action.payload.choseSticker &&
          item.choseColor === action.payload.choseColor
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.choseSize === action.payload.choseSize &&
          item.choseSticker === action.payload.choseSticker &&
          item.choseColor === action.payload.choseColor
      );

      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity--;
        if (state.cart[itemIndex].quantity === 0) {
          state.cart.splice(itemIndex, 1);
        }
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.choseSize === action.payload.choseSize &&
          item.choseSticker === action.payload.choseSticker &&
          item.choseColor === action.payload.choseColor
      );
      state.cart.splice(itemIndex, 1);
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
