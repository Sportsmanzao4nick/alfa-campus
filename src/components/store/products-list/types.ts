import { store } from "../rootReducer";

interface Product {
  id: number;
  title: string;
  description: string;
  preview: string;
  images: [];
  subtitle: string;
  price: number;
  colors: [];
  sizes: [];
  stickerNumbers: [];
  availability: boolean;
}

export type ProductState = {
  type: string;
  payload: [];
  isLoading: boolean;
  hasError: boolean;
  list: Product[];
  currentProduct: Product[];
}


export type AppDispatch = typeof store.dispatch;
export type ApplicationState = ReturnType<typeof store.getState>;
