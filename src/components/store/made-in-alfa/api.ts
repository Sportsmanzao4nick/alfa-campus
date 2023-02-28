import axios from "axios";

export const getProductsMadeInAlfa = async () => {
  return await axios.get("http://qa-games.ru/astore/made-in-alfa");
};
