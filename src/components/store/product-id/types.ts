import { store } from "../rootReducer";

export interface AppState {
  type: string;
  payload: {};
  productID: {
    isLoading: boolean;
    hasError: boolean;
    list: [];
    currentProduct: [];
  };
}

export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;