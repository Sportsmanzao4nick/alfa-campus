import React from "react";
import { ProductsListOwnDesign } from "../../components/products-list/own-design";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./index.module.css";

export const OwnDesign = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Typography.TitleResponsive
          className={styles.header}
          tag="h1"
          weight="bold"
          font="styrene"
        >
          Свой дизайн
        </Typography.TitleResponsive>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="div"
          weight="medium"
        >
          Выберите вещь, а затем — цвет, размер и стикер.
          <br /> Перенесём стикер на вещь как на фото
        </Typography.Text>
      </div>
      <ProductsListOwnDesign />
    </div>
  );
};
