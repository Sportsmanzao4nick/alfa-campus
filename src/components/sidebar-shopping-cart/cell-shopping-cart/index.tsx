import React, { useEffect } from "react";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { Typography } from "@alfalab/core-components/typography";
import { Button } from "@alfalab/core-components/button";
import { IconButton } from "@alfalab/core-components/icon-button";
import { Product, Props } from "./types";
import { PlusMIcon } from "@alfalab/icons-glyph/PlusMIcon";
import { MinusMIcon } from "@alfalab/icons-glyph/MinusMIcon";
import { SfCrossMIcon } from "@alfalab/icons-glyph/SfCrossMIcon";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import {
  cartSelectors,
  useAppDispatch,
  useAppSelector,
} from "../../store/cart";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
  getTotalPrice,
} from "../../store/cart/cart-slice";
import styles from "./index.module.css";

export const CellShoppingCart = ({ cartArr }: Props) => {
  const dispatch = useAppDispatch();
  const cartSelect = useAppSelector(cartSelectors.getCart);
  const totalPrice = useAppSelector(cartSelectors.getTotalPrice);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cartSelect]);

  return (
    <div className={styles.container}>
      {cartArr?.map((item: Product) => {
        return (
          <PureCell
            key={item.id}
            direction="horizontal"
            className={styles.cellContainer}
          >
            <PureCell.Graphics>
              <img src={item.choseImg} className={styles.image} />
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
      <div className={styles.sumContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          Ваша сумма:
        </Typography.TitleResponsive>
        <PureCell.Amount
          className={styles.amountSum}
          minority={1}
          weight="bold"
          value={totalPrice}
          currency="RUR"
        />
      </div>
      <Button size="s" className={styles.buttonContinue} view="accent">
        Дальше
      </Button>
    </div>
  );
};
