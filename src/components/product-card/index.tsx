import React, { useEffect, useState } from "react";
import { ProductState } from "./types";
import { useParams } from "react-router-dom";
import { Product } from "../product-card-item";
import {
  productsOperations,
  productsSelectors,
  useAppDispatch,
  useAppSelector,
} from "../store/product-id";
import styles from "./index.module.css";

export const ProductCard = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const product: ProductState | null = useAppSelector(
    productsSelectors.getCurrentProduct
  );
  const isLoading = useAppSelector(productsSelectors.getProductsIsLoading);

  useEffect(() => {
    dispatch(productsOperations.fetchProductById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return product ? <Product product={product} /> : null;
};
