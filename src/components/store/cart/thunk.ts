import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SubmitState } from "../types";

export const postOrder = createAsyncThunk(
  "products/postOrder",
  async (order: SubmitState, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(
        "http://qa-games.ru/astore/create-order",
        order
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
