interface Products {
  choseColor: string;
  choseImg: string;
  choseSize: string;
  choseSticker: number;
  id: number;
  price: number;
  title: string;
  quantity: number;
}

export interface Product {
  isActive: boolean;
  handeMenuOpen: () => void;
  handeMenuClose: () => void;
  cartArr: Products[];
}