import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {SubmitState} from "../types";

export const postOrder = createAsyncThunk(
  "products/postOrder",
  async ({ cart, customerInfo }: SubmitState, { rejectWithValue, dispatch }) => {
    try {
      const orderInfo = {
        cart: cart,
        customerInfo: customerInfo,
      };

      const response = await axios.post(
        "http://qa-games.ru/astore/create-order",
        orderInfo
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
