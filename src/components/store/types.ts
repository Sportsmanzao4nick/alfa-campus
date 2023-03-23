import { store } from "./rootReducer";

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
  order: {
    products: productItem[];
    customerInfo: {
      name: string,
      email: string,
      phone: string,
      address: string,
      agreement: boolean,
      deliveryType: string,
      paymentType: string,
      comment?: string,
    };
  };
}

export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
