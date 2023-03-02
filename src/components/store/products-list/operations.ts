import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductsMadeInAlfa = createAsyncThunk(
  "products/fetchMadeInAlfa",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        "http://qa-games.ru/astore/made-in-alfa"
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

export const fetchProductsOwnDesign = createAsyncThunk(
  "products/fetchOwnDesign",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://qa-games.ru/astore/your-design");

      if (response.status !== 200) {
        throw new Error("Error!");
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
