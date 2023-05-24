import React, { useEffect } from "react";
import { Cell } from "../../products-list-item";
import { Products } from "./types";
import { Typography } from "@alfalab/core-components/typography";
import { NavLink } from "react-router-dom";
import { Skeleton } from "@alfalab/core-components/skeleton";
import {
  productsOperations,
  productsSelectors,
  useAppDispatch,
  useAppSelector,
} from "../../store/products-list";
import styles from "./index.module.css";

export const ProductsListOwnDesign = () => {
  const dispatch = useAppDispatch();
  const productsListOwnDesign = useAppSelector(
    productsSelectors.getProductsListOwnDesign
  );
  const isLoading = useAppSelector(productsSelectors.getProductsIsLoading);
  const hasError = useAppSelector(productsSelectors.getProductsHasError);

  useEffect(() => {
    dispatch(productsOperations.fetchProductsOwnDesign());
  }, [dispatch]);

  if (hasError) {
    return <h2>Произошла ошибка, повторите попытку</h2>;
  }

  return (
    <div className={styles.container}>
      {productsListOwnDesign?.map((items: Products) => {
        return (
          <div key={items.id} className={styles.cellContainer}>
            <Typography.TitleResponsive
              className={styles.containerHeader}
              color="accent"
              tag="h2"
              weight="bold"
              font="styrene"
            >
              {items.title}
            </Typography.TitleResponsive>
            <Typography.Text
              className={styles.text}
              view="primary-large"
              tag="div"
              weight="medium"
            >
              {items.description}
            </Typography.Text>
            <div className={styles.itemContainer}>
              {items.products.map((item: Products, index: number) => {
                return (
                  <NavLink
                    key={item.id}
                    className={styles.link}
                    to={`/product/${item.id}`}
                  >
                    <Skeleton visible={isLoading} animate={true}>
                      <Cell
                        key={item.id}
                        id={item.id}
                        subtitle={item.subtitle}
                        preview={item.preview}
                        price={item.price}
                        title={item.title}
                        description={item.description}
                      />
                    </Skeleton>
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
