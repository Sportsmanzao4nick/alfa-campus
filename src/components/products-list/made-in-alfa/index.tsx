import React, { useEffect, useState } from "react";
import { Cell } from "../../products-list-item";
import { Products } from "./types";

import {
  productsOperations,
  productsSelectors,
  useAppDispatch,
  useAppSelector,
} from "../../store/made-in-alfa";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

export const ProductsListMadeInAlfa = () => {
  const dispatch = useAppDispatch();
  const productsListMadeInAlfa = useAppSelector(
    productsSelectors.getProductsList
  );
  const isLoading = useAppSelector(productsSelectors.getProductsIsLoading);

  useEffect(() => {
    dispatch(productsOperations.fetchProductsMadeInAlfa());
  }, []);

  return (
    <div className={styles.container}>
      {productsListMadeInAlfa.map((item: Products) => {
        return (
          <NavLink
            key={item.id}
            className={styles.link}
            to={`/product/${Number(item.id)}`}
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
