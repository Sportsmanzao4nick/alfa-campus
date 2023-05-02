import React from "react";
import { ModalResponsive } from "@alfalab/core-components/modal/responsive";
import { Product } from "./types";
import { CellItem } from "../cell-item";
import { Typography } from "@alfalab/core-components/typography";
import { InputForm } from "../input-form";
import styles from "./index.module.css";
import { SummaryInfo } from "../summary-info";

export const ModalOrder = ({
  isModalActive,
  handeModalOpen,
  cartArr,
}: Product) => {
  return (
    <ModalResponsive
      open={isModalActive}
      hasCloser={true}
      onClose={handeModalOpen}
      size="fullscreen"
      zIndex={200}
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
        <div className={styles.inputsContainer}>
          <InputForm />
        </div>
        <div className={styles.productsContainer}>
          <div className={styles.fixedContainer}>
            <div className={styles.cellItemWrapper}>
              <CellItem cartArr={cartArr} isModalActive={isModalActive} />
            </div>
            <div className={styles.summaryInfoWrapper}>
              <SummaryInfo />
            </div>
          </div>
        </div>
      </div>
    </ModalResponsive>
  );
};
