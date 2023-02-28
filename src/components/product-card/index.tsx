import React, { useEffect, useState } from "react";
import { Products } from "./types";
import { useParams } from "react-router-dom";
import { Product } from "../product-card-item";
import axios from "axios";
import styles from "./index.module.css";
import {
  productsOperations,
  productsSelectors,
  useAppDispatch,
  useAppSelector,
} from "../store/product-id";

export const ProductCardOwnDesign = () => {
  let { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const productID: Products | null = useAppSelector(
    productsSelectors.getProductsList
  );
  const [product, setProduct] = useState<Products | null>(null);
  console.log('eto id UseParams', id);
  console.log('eto zagrujennyi object posle click',productID)

  useEffect(() => {
    dispatch(productsOperations.fetchProductsWithID(`${id}`));
  }, []);
  console.log(productID);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        setProduct(res.data.customProducts[`${id}`]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!product) return null;
  if (!productID) return null;

  // Снова проблема Cannot read properties of undefined (reading 'forEach'). Код работает до перезагрузки страницы
  // Если взять и поменять значение без перезагрузки страницы, то страница own-design работает

  return <Product product={product} />;
};
