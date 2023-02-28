export interface Products {
  product:{
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
  };
}