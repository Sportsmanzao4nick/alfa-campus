import axios from "axios";

export const getProductsWithID = async (id: number | string) => {
  return await axios.get(`http://qa-games.ru/astore/product/${id}`);
};
