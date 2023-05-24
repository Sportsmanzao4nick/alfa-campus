import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://qa-games.ru/astore/product/${id}`
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
