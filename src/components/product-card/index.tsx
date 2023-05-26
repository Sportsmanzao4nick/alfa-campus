import React, { useEffect, useState } from "react";
import { ProductState } from "./types";
import { useParams } from "react-router-dom";
import { Product } from "../product-card-item";
import { Skeleton } from "@alfalab/core-components/skeleton";
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
  const hasError = useAppSelector(productsSelectors.getProductsHasError);

  useEffect(() => {
    dispatch(productsOperations.fetchProductById(id));
  }, [dispatch, id]);

  if (hasError) {
    return <h2>Произошла ошибка, повторите попытку</h2>;
  }
  return product ? (
    <Skeleton visible={isLoading} animate={true}>
      <Product product={product} />
    </Skeleton>
  ) : null;
};
