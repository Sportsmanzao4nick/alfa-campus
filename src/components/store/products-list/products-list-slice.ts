import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductsMadeInAlfa,
  fetchProductsOwnDesign,
} from "./thunk";

const initialState = {
  isLoading: false,
  hasError: false,
  listMadeInAlfa: [],
  listOwnDesign:[],
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
        state.listMadeInAlfa = action.payload;
      })
      .addCase(fetchProductsMadeInAlfa.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.listMadeInAlfa = [];
      })
      .addCase(fetchProductsOwnDesign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsOwnDesign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.listOwnDesign = action.payload;
      })
      .addCase(fetchProductsOwnDesign.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.listOwnDesign = [];
      });
  },
});

export default products.reducer;
