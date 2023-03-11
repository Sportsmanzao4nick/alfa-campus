import { store } from "./rootReducer";

type Item = {
  choseColor: string;
  choseImg: string;
  choseSize: string;
  choseSticker: number;
  id: number;
  price: number;
  title: string;
  quantity: number;
};

export interface CartState {
  cart: Item[];
  totalQuantity: number;
  totalPrice: number;
  deliveryPrice: number;
  totalPriceWithDelivery: number;
}

export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
