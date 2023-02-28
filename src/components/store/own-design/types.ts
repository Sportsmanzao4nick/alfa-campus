import { store } from "../rootReducer";

export interface AppState {
  type: string;
  payload: [];
  productsOwnDesign: {
    isLoading: boolean;
    hasError: boolean;
    list: [];
    currentProduct: [];
  };
}

export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
