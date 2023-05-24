import React from "react";
import { ProductsListMadeInAlfa } from "../../components/products-list/made-in-alfa";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./index.module.css";

export const MadeInAlfa = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Typography.TitleResponsive
          className={styles.header}
          view="xlarge"
          defaultMargins={true}
          tag="h1"
          weight="bold"
          font="styrene"
        >
          Сделано в Альфе
        </Typography.TitleResponsive>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="div"
          weight="medium"
        >
          Хотим каждую из этих вещей! Себе, родным и друзьям
        </Typography.Text>
      </div>
      <ProductsListMadeInAlfa />
    </div>
  );
};
