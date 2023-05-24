import React, { useEffect } from "react";
import { getTotalPrice } from "../../store/cart/cart-slice";
import {
  cartSelectors,
  useAppDispatch,
  useAppSelector,
} from "../../store/cart";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { Typography } from "@alfalab/core-components/typography";
import styles from "./index.module.css";
import {Summary} from "../summary";

export const SummaryInfo = () => {
  const dispatch = useAppDispatch();
  const cartSelect = useAppSelector(cartSelectors.getCart);
  const totalPrice = useAppSelector(cartSelectors.getTotalPrice);
  const deliveryPrice = useAppSelector(cartSelectors.getDeliveryPrice);
  const totalPriceWithDelivery = useAppSelector(
    cartSelectors.getTotalPriceWithDelivery
  );

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [cartSelect, dispatch]);

  return (
    <div className={styles.sumContainer}>
      <Summary/>
      <div className={styles.infoSumContainer}>
        <div className={styles.infoSumOfCart}>
          <Typography.TitleResponsive
            className={styles.titleText}
            view="xsmall"
            tag="h3"
            weight="regular"
            font="styrene"
          >
            Доставка:
          </Typography.TitleResponsive>
          <PureCell.Amount
            className={styles.amountSum}
            minority={1}
            weight="normal"
            value={deliveryPrice}
            currency="RUR"
          />
        </div>
        <div className={styles.infoSumOfCart}>
          <Typography.TitleResponsive
            className={styles.titleText}
            view="xsmall"
            tag="h3"
            weight="bold"
            font="styrene"
          >
            Итоговая сумма:
          </Typography.TitleResponsive>
          <PureCell.Amount
            className={styles.amountSum}
            minority={1}
            weight="bold"
            value={totalPriceWithDelivery ? totalPriceWithDelivery : totalPrice}
            currency="RUR"
          />
        </div>
      </div>
    </div>
  );
};
