import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { BurgerMIcon } from "@alfalab/icons-glyph/BurgerMIcon";
import { Typography } from "@alfalab/core-components/typography";
import { Sidebar } from "../sidebar";
import { PureCell } from "@alfalab/core-components/pure-cell";

export const Header = () => {
  const [isActive, setActive] = useState(false);
  const handeMenuOpen = () => {
    setActive(!isActive);
  };
  const menuClose = () => {
    setActive(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <NavLink
          data-testid="main-page-link"
          onClick={menuClose}
          className={styles.logo}
          to=""
        >
          <Typography.TitleResponsive
            className={styles.logo_power}
            tag="div"
            weight="bold"
            view="medium"
            font="styrene"
          >
            A-Store
          </Typography.TitleResponsive>
        </NavLink>
      </div>
      <PureCell className={styles.links}>
        <PureCell.Graphics verticalAlign="center">
          <BurgerMIcon onClick={handeMenuOpen} className={styles.burger} />
        </PureCell.Graphics>
        <PureCell.Content>
          <PureCell.Main>
            <Typography.TitleResponsive
              onClick={handeMenuOpen}
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
      <Sidebar isActive={isActive} handeMenuOpen={handeMenuOpen} />
    </div>
  );
};
