import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { SidePanelResponsive } from "@alfalab/core-components/side-panel/responsive";
import styles from "./index.module.css";
import { Product } from "./types";
import { CellShoppingCart } from "./cell-shopping-cart";

export const SidebarShoppingCart = ({
  isActive,
  handeMenuOpen,
  cartArr,
}: Product) => {
  return (
    <div>
      {cartArr.length > 0 && (
        <SidePanelResponsive
          className={styles.sideContainer}
          open={isActive}
          placement="right"
          hasCloser={true}
          onClose={handeMenuOpen}
        >
          <SidePanelResponsive.Header
            className={styles.header}
            hasCloser={true}
          />
          <SidePanelResponsive.Content className={styles.content}>
            <Typography.TitleResponsive
              className={styles.text}
              view="medium"
              tag="h3"
              weight="bold"
              defaultMargins={true}
              font="styrene"
            >
              Ваш заказ
            </Typography.TitleResponsive>
            <CellShoppingCart
              cartArr={cartArr}
              isActive={isActive}
              handeMenuOpen={handeMenuOpen}
            />
          </SidePanelResponsive.Content>
        </SidePanelResponsive>
      )}
    </div>
  );
};
