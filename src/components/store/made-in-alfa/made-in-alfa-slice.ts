import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  hasError: false,
  list: [],
  currentProduct: null,
};

const productsMadeInAlfaSlice = createSlice({
  name: "madeInAlfa",
  initialState,
  reducers: {
    onProductsLoadingStart: (state) => {
      state.isLoading = true;
    },
    onProductsLoadingFailed: (state) => {
      state.isLoading = false;
      state.hasError = true;
      state.list = [];
    },
    onProductsLoadingFinished: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.list = action.payload;
    },
    onCurrentProductChoose: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const {
  onProductsLoadingStart,
  onProductsLoadingFailed,
  onProductsLoadingFinished,
  onCurrentProductChoose,
} = productsMadeInAlfaSlice.actions;

export default productsMadeInAlfaSlice.reducer;
