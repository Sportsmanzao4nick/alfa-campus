import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductsMadeInAlfa,
  fetchProductsOwnDesign,
} from "./operations";

const initialState = {
  isLoading: false,
  hasError: false,
  list: [],
  currentProduct: null,
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsMadeInAlfa.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsMadeInAlfa.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.list = action.payload;
      })
      .addCase(fetchProductsMadeInAlfa.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.list = [];
      })
      .addCase(fetchProductsOwnDesign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsOwnDesign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.list = action.payload;
      })
      .addCase(fetchProductsOwnDesign.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.list = [];
      });
  },
});

export default products.reducer;
