import React, { useEffect } from "react";
import { Cell } from "../../products-list-item";
import { Product } from "./types";
import { NavLink } from "react-router-dom";
import { Skeleton } from "@alfalab/core-components/skeleton";
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
  const hasError = useAppSelector(productsSelectors.getProductsHasError);

  useEffect(() => {
    dispatch(productsOperations.fetchProductsMadeInAlfa());
  }, [dispatch]);

  if (hasError) {
    return <h2>Произошла ошибка, повторите попытку</h2>;
  }

  return (
    <div className={styles.container}>
      {productsListMadeInAlfa?.map((item: Product) => {
        return (
          <NavLink
            key={item.id}
            className={styles.link}
            to={`${item.id}`}
          >
            <Skeleton visible={isLoading} animate={true}>
              <Cell
                key={item.id}
                preview={item.preview}
                id={item.id}
                price={item.price}
                title={item.title}
                description={item.description}
                availability={item.availability}
              />
            </Skeleton>
          </NavLink>
        );
      })}
    </div>
  );
};
