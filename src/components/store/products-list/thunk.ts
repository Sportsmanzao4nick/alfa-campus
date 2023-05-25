import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsMadeInAlfa = createAsyncThunk(
  "products/fetchMadeInAlfa",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "./products-mia.json"
      );

      if (response.status !== 200) {
        throw new Error("Error!");
      }

      return response.data.products;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchProductsOwnDesign = createAsyncThunk(
  "products/fetchOwnDesign",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
          "./products-od.json"
      );

      if (response.status !== 200) {
        throw new Error("Error!");
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
