import React from "react";
import { Products } from "./types";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./index.module.css";

export const Cell = ({
  id,
  title,
  preview,
  subtitle,
  price,
  availability,
}: Products) => {
  return (
    <PureCell
      className={styles.container}
      key={id}
      verticalPadding="airy"
      direction="vertical"
    >
      <PureCell.Graphics verticalAlign="top">
        <div className={styles.graphics}>
          <img className={styles.images} src={preview} />
        </div>
      </PureCell.Graphics>
      <PureCell.Content>
        <PureCell.Main>
          <Typography.TitleResponsive
            className={styles.text}
            view="xsmall"
            tag="h2"
            weight="medium"
            font="styrene"
            dataTestId="title-item"
          >
            {title}
          </Typography.TitleResponsive>
          <Typography.Text
            className={styles.text}
            view="primary-small"
            tag="p"
            weight="bold"
            color="tertiary"
          >
            {subtitle}
          </Typography.Text>
          <PureCell.Amount
            className={styles.text}
            value={price}
            currency="RUR"
            minority={1}
            weight="bold"
          />
        </PureCell.Main>
      </PureCell.Content>
    </PureCell>
  );
};
