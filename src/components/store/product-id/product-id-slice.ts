import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "./thunk";

const initialState = {
  isLoading: false,
  hasError: false,
  currentProduct: null,
};

const product = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default product.reducer;
