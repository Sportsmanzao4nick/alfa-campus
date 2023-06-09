import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../types";
import { postOrder } from "./thunk";

const localStorageFunc = (state) => {
  localStorage.setItem("cart", JSON.stringify(state.cart.map((item) => item)));
  localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
};

const cartItems =
  localStorage.getItem("cart") !== null
    ? JSON.parse(localStorage.getItem("cart") as string)
    : [];

const totalQuantityItem =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity") as string)
    : 0;

const initialState: CartState = {
  cart: cartItems,
  totalQuantity: totalQuantityItem,
  totalPrice: 0,
  deliveryPrice: 0,
  totalPriceWithDelivery: 0,
  isLoading: false,
  hasError: false,
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
      localStorageFunc(state);
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
      localStorageFunc(state);
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
      localStorageFunc(state);
    },
    removeItem: (state, action) => {
      const itemToRem = action.payload;
      const itemIndex = state.cart.findIndex((item) => {
        const keys = Object.keys(item);
        const sameKeys = keys.filter((key) => itemToRem.hasOwnProperty(key));
        return sameKeys.every((key) => item[key] === itemToRem[key]);
      });
      state.cart.splice(itemIndex, 1);
      localStorageFunc(state);
    },
    getTotalQuantity: (state) => {
      state.totalQuantity = state.cart.reduce(
        (total, product) => total + product.quantity,
        0
      );
      localStorageFunc(state);
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.cart.reduce(
        (total, product) => total + product.price * product.quantity,
        0
      );
      localStorageFunc(state);
    },
    totalWithDelivery: (state, action) => {
      state.deliveryPrice = action.payload;
      state.totalPriceWithDelivery = state.totalPrice + state.deliveryPrice;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(postOrder.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotalQuantity,
  getTotalPrice,
  totalWithDelivery,
} = cartSlice.actions;

export default cartSlice.reducer;
