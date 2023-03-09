import React, { useState } from "react";
import { SidebarMenu } from "../sidebar-menu";
import { NavLink } from "react-router-dom";
import { BurgerMIcon } from "@alfalab/icons-glyph/BurgerMIcon";
import { Typography } from "@alfalab/core-components/typography";
import { PureCell } from "@alfalab/core-components/pure-cell";
import styles from "./index.module.css";

export const Header = () => {
  const [isActive, setActive] = useState(false);
  const handeMenuOpen = () => {
    setActive(prev => !prev)
  };
  const menuClose = () => {
    setActive(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <NavLink
          data-testid="main-page-link"
          onClick={menuClose}
          className={styles.logo}
          to=""
        >
          <Typography.TitleResponsive
            className={styles.logoPower}
            tag="div"
            weight="bold"
            view="medium"
            font="styrene"
          >
            A-Store
          </Typography.TitleResponsive>
        </NavLink>
      </div>
      <PureCell onClick={handeMenuOpen} className={styles.links}>
        <PureCell.Graphics verticalAlign="center">
          <BurgerMIcon className={styles.burger} />
        </PureCell.Graphics>
        <PureCell.Content>
          <PureCell.Main>
            <Typography.TitleResponsive
              className={styles.menu}
              tag="div"
              weight="bold"
              view="medium"
              font="styrene"
            >
              меню
            </Typography.TitleResponsive>
          </PureCell.Main>
        </PureCell.Content>
      </PureCell>
      <SidebarMenu isActive={isActive} handeMenuOpen={handeMenuOpen} />
    </div>
  );
};
