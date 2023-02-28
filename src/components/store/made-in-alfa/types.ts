import { store } from "../rootReducer";

export interface AppState {
  type: string;
  payload: [];
  isLoading: false,
  hasError: false,
  list: [],
  currentProduct: [],
  // productsMadeInAlfa: {
  //   isLoading: boolean;
  //   hasError: boolean;
  //   list: [];
  //   currentProduct: [];
  // };
}
export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;