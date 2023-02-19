

export interface Products {
  key: number;
  id: number;
  title: string;
  description: string;
  preview: string;
  // images: {
  //   src: string;
  //   item: string
  // };
  images: [];
  subtitle: string;
  price: number;
  colors: [];
  sizes: [];
  stickerNumbers: [];
  availability: boolean;
}
