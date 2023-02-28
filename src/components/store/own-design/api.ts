import axios from "axios";

export const getProductsOwnDesign = async () => {
  return await axios.get("http://qa-games.ru/astore/your-design");
};
