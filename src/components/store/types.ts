import { store } from "./rootReducer";

export type productItem = {
  choseColor: string;
  choseImg: string;
  choseSize: string;
  choseSticker: number;
  id: number;
  price: number;
  title: string;
  quantity: number;
};

export type customerItem = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  comments: string;
};

export interface CartState {
  cart: productItem[];
  totalQuantity: number;
  totalPrice: number;
  deliveryPrice: number;
  totalPriceWithDelivery: number;
  customerInfo: customerItem[];
  isLoading: boolean;
  hasError: boolean;
}

export interface SubmitState {
  order: {
    cart: productItem[];
    customerInfo: {
      fullName: string;
      email: string;
      phone: string;
      address: string;
      comments: string;
    };
  };
}

export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
