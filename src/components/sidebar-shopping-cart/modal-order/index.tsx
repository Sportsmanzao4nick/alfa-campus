import React from "react";
import { ModalResponsive } from "@alfalab/core-components/modal/responsive";
import { Product } from "./types";
import { CellItem } from "../cell-item";
import { Typography } from "@alfalab/core-components/typography";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { InputForm } from "../input-form";
import { cartSelectors, useAppSelector } from "../../store/cart";
import styles from "./index.module.css";

export const ModalOrder = ({
  isModalActive,
  handeModalOpen,
  cartArr,
}: Product) => {
  const totalPrice = useAppSelector(cartSelectors.getTotalPrice);
  const deliveryPrice = useAppSelector(cartSelectors.getDeliveryPrice);
  const totalPriceWithDelivery = useAppSelector(
    cartSelectors.getTotalPriceWithDelivery
  );

  return (
    <ModalResponsive
      open={isModalActive}
      hasCloser={true}
      onClose={handeModalOpen}
      size="fullscreen"
    >
      <ModalResponsive.Header
        hasCloser={true}
        hasBackButton={true}
        onBack={handeModalOpen}
        sticky={true}
        className={styles.header}
      />
      <div className={styles.headerText}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          Ваш заказ
        </Typography.TitleResponsive>
      </div>
      <div className={styles.container}>
        <div className={styles.productsContainer}>
          <CellItem cartArr={cartArr} />
          <div className={styles.sumContainer}>
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
              value={
                totalPriceWithDelivery ? totalPriceWithDelivery : totalPrice
              }
              currency="RUR"
            />
          </div>
        </div>
        <div className={styles.inputsContainer}>
          <InputForm />
        </div>
      </div>
    </ModalResponsive>
  );
};
