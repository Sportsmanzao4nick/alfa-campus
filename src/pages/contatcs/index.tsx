import styles from "./index.module.css"
import { Typography } from "@alfalab/core-components/typography";
import React from "react";

export const Contacts = () => {
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
          Контакты
        </Typography.TitleResponsive>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="div"
          weight="medium"
        >
          +7 906 061 60 20
        </Typography.Text>
      </div>
    </div>
  );
};
