import React, { useEffect } from "react";
import { Cell } from "../../products-list-item";
import { Products } from "./types";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import {useAppDispatch} from "../../store/made-in-alfa";
import {useSelector} from "react-redux";
import {productsOperations, productsSelectors} from "../../store/own-design";

export const ProductsListOwnDesign = () => {
  const dispatch = useAppDispatch();
  const productsListOwnDesign = useSelector(productsSelectors.getProductsList);
  const isLoading = useSelector(productsSelectors.getProductsIsLoading);

  useEffect(() => {
    dispatch(productsOperations.fetchProductsOwnDesign())
  }, [])

  return (
    <div className={styles.container}>
      {productsListOwnDesign.map((items: Products) => {
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
                    to={`/product/${Number(item.id)}`}
                  >
                    <Cell
                      key={item.id}
                      id={item.id}
                      subtitle={item.subtitle}
                      preview={item.preview}
                      price={item.price}
                      title={item.title}
                      description={item.description}
                    />
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
