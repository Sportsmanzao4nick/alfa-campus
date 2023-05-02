import React, { useEffect } from "react";
import { Typography } from "@alfalab/core-components/typography";
import { PureCell } from "@alfalab/core-components/pure-cell";
import {
  cartSelectors,
  useAppDispatch,
  useAppSelector,
} from "../../store/cart";
import styles from "./index.module.css";
import { getTotalPrice } from "../../store/cart/cart-slice";

export const Summary = () => {
  const dispatch = useAppDispatch();
  const cartSelect = useAppSelector(cartSelectors.getCart);
  const totalPrice = useAppSelector(cartSelectors.getTotalPrice);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cartSelect, dispatch]);

  return (
    <div className={styles.sumOfCart}>
      <Typography.TitleResponsive
        className={styles.titleText}
        view="xsmall"
        tag="h3"
        weight="bold"
        font="styrene"
      >
        Cумма:
      </Typography.TitleResponsive>
      <PureCell.Amount
        className={styles.amountSum}
        minority={1}
        weight="bold"
        value={totalPrice}
        currency="RUR"
      />
    </div>
  );
};
