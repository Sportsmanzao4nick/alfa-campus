import styles from "./index.module.css";
import { ProductsList } from "../../components/products-list/made-in-alpha";
import { Typography } from "@alfalab/core-components/typography";
import React from "react";

export const MadeInAlpha = () => {
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
      <ProductsList />
    </div>
  );
};