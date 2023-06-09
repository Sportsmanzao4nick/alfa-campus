import React from "react";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { Typography } from "@alfalab/core-components/typography";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import { IconButton } from "@alfalab/core-components/icon-button";
import { PlusMIcon } from "@alfalab/icons-glyph/PlusMIcon";
import { MinusMIcon } from "@alfalab/icons-glyph/MinusMIcon";
import { SfCrossMIcon } from "@alfalab/icons-glyph/SfCrossMIcon";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../store/cart/cart-slice";
import { useAppDispatch } from "../../store/cart";
import { ItemArr, Product } from "./types";
import styles from "./index.module.css";

export const CellItem = ({ cartArr, isModalActive }: ItemArr) => {
  const dispatch = useAppDispatch();

  return (
    <div className={isModalActive ?  styles.containerFixed : styles.container}>
      {cartArr?.map((item: Product) => {
        return (
          <PureCell
            key={item.id}
            direction="horizontal"
            className={styles.cellContainer}
          >
            <PureCell.Graphics>
              <img src={process.env.PUBLIC_URL + item.choseImg} className={styles.image} alt="img" />
            </PureCell.Graphics>
            <PureCell.Content>
              <PureCell.Main>
                <div className={styles.mainContainer}>
                  <Typography.TitleResponsive
                    className={styles.titleText}
                    view="xsmall"
                    tag="h3"
                    weight="bold"
                    font="styrene"
                  >
                    {item.title}
                  </Typography.TitleResponsive>
                  {item.choseColor && (
                    <Typography.Text
                      className={styles.text}
                      view="primary-small"
                      color="secondary"
                      tag="p"
                      weight="medium"
                    >
                      цвет: {item.choseColor}
                    </Typography.Text>
                  )}
                  {item.choseSize && (
                    <Typography.Text
                      className={styles.text}
                      view="primary-small"
                      tag="p"
                      weight="medium"
                      color="secondary"
                    >
                      размер: {item.choseSize}
                    </Typography.Text>
                  )}
                  {item.choseSticker && (
                    <Typography.Text
                      className={styles.text}
                      view="primary-small"
                      tag="p"
                      weight="medium"
                      color="secondary"
                    >
                      номер стикера: {item.choseSticker}
                    </Typography.Text>
                  )}
                </div>
              </PureCell.Main>
            </PureCell.Content>
            <div className={styles.quantityContainer}>
              <div className={styles.iconContainer}>
                <Circle size={20}>
                  <IconButton
                    size="xxs"
                    icon={MinusMIcon}
                    view="secondary"
                    className={styles.button}
                    onClick={() => dispatch(decrementQuantity(item))}
                  />
                </Circle>
              </div>
              <PureCell.Amount
                className={styles.amount}
                minority={1}
                weight="bold"
                value={item.quantity}
              />
              <div className={styles.iconContainer}>
                <Circle size={20}>
                  <IconButton
                    size="xxs"
                    icon={PlusMIcon}
                    view="secondary"
                    className={styles.button}
                    onClick={() => dispatch(incrementQuantity(item))}
                  />
                </Circle>
              </div>
            </div>
            <div className={styles.priceContainer}>
              <PureCell.Amount
                className={styles.amount}
                minority={1}
                weight="bold"
                currency="RUR"
                value={item.price * item.quantity}
              />
              <div className={styles.iconContainer}>
                <Circle size={20}>
                  <IconButton
                    size="xxs"
                    icon={SfCrossMIcon}
                    view="secondary"
                    className={styles.button}
                    onClick={() => dispatch(removeItem(item))}
                  />
                </Circle>
              </div>
            </div>
          </PureCell>
        );
      })}
    </div>
  );
};
