export interface Product {
    choseColor: string;
    choseImg: string;
    choseSize: string;
    choseSticker: number;
    id: number;
    price: number;
    title: string;
    quantity: number;
}

export interface ItemArr {
    cartArr: Product[];
    isModalActive: boolean;
}