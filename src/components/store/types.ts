import { store } from "./rootReducer";
import {Product} from "../sidebar-shopping-cart/input-form/types";

export type productItem = {
  choseColor: string;
  choseImg: string;
  choseSize: string;
  choseSticker: number;
  id: number;
  price: number;
  totalPrice: number;
  title: string;
  quantity: number;
};

export interface CartState {
  cart: productItem[];
  totalQuantity: number;
  totalPrice: number;
  deliveryPrice: number;
  totalPriceWithDelivery: number;
  isLoading: boolean;
  hasError: boolean;
}

export interface SubmitState {
  name: string;
  email: string;
  phone: string;
  address: string;
  agreement: boolean;
  deliveryType: string;
  paymentType: string;
  comments: string;
  products: Product[];
}

export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
