import React from "react";

export interface Product {
  id: number;
  totalPrice: number;
  totalCount: number;
  color?: string;
  model?: string;
  stickerNumber?: number;
}

export interface ValueDelivery extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement & {
    value: "300" | "350" | "";
  };
}

export interface Order {
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
