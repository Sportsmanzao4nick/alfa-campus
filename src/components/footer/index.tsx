import styles from "./index.module.css";
import { Typography } from "@alfalab/core-components/typography";
import React from "react";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Typography.Text
        className={styles.copyright}
        tag="div"
        weight="regular"
        color="disabled"
      >
        © ООО «Альфа Фьюче Пипл», 2022
      </Typography.Text>
    </div>
  );
};
