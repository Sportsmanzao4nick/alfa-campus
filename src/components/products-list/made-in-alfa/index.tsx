import React, { useEffect } from "react";
import { Cell } from "../../products-list-item";
import { Product } from "./types";
import { NavLink } from "react-router-dom";
import {
  productsOperations,
  productsSelectors,
  useAppDispatch,
  useAppSelector,
} from "../../store/products-list";
import styles from "./index.module.css";

export const ProductsListMadeInAlfa = () => {
  const dispatch = useAppDispatch();
  const productsListMadeInAlfa = useAppSelector(
    productsSelectors.getProductsListMadeInAlfa
  );
  const isLoading = useAppSelector(productsSelectors.getProductsIsLoading);

  useEffect(() => {
    dispatch(productsOperations.fetchProductsMadeInAlfa());
  }, [dispatch]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className={styles.container}>
      {productsListMadeInAlfa &&
        productsListMadeInAlfa?.map((item: Product) => {
          return (
            <NavLink
              key={item.id}
              className={styles.link}
              to={`/product/${item.id}`}
            >
              <Cell
                key={item.id}
                preview={item.preview}
                id={item.id}
                price={item.price}
                title={item.title}
                description={item.description}
                availability={item.availability}
              />
            </NavLink>
          );
        })}
    </div>
  );
};
