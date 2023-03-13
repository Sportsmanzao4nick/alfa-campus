import React, { useEffect, useState } from "react";
import { cartSelectors, useAppDispatch, useAppSelector } from "../store/cart";
import { Badge } from "@alfalab/core-components/badge";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import { SidebarShoppingCart } from "../sidebar-shopping-cart";
import { ShoppingBagMIcon } from "@alfalab/icons-glyph/ShoppingBagMIcon";
import { getTotalQuantity } from "../store/cart/cart-slice";
import styles from "./index.module.css";

export const Cart = () => {
  const [isActive, setActive] = useState(false);
  const handeMenuOpen = () => {
    setActive((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const cartSelect = useAppSelector(cartSelectors.getCart);
  const totalQuantity = useAppSelector(cartSelectors.getTotalQuantity);

  useEffect(() => {
    dispatch(getTotalQuantity());
  }, [cartSelect, dispatch]);

  const iconQuantity = (
    <Badge
      className={styles.badge}
      view="count"
      size="xl"
      height={30}
      content={totalQuantity}
    />
  );

  return (
    <div>
      {cartSelect.cart.length > 0 && (
        <Circle
          backgroundColor="var(--color-light-graphic-accent)"
          className={styles.circleButtonIcon}
          size={80}
          bottomAddons={iconQuantity}
        >
          <ShoppingBagMIcon
            onClick={handeMenuOpen}
            className={styles.buttonIcon}
          />
        </Circle>
      )}
      <SidebarShoppingCart
        isActive={isActive}
        handeMenuOpen={handeMenuOpen}
        cartArr={cartSelect.cart}
      />
    </div>
  );
};


