import React from "react";
import { NavLink } from "react-router-dom";
import { MailMIcon } from "@alfalab/icons-glyph/MailMIcon";
import { PhoneMIcon } from "@alfalab/icons-glyph/PhoneMIcon";
import { TelegramMIcon } from "@alfalab/icons-logotype/TelegramMIcon";
import { Typography } from "@alfalab/core-components/typography";
import { SidePanelResponsive } from "@alfalab/core-components/side-panel/responsive";
import { Circle } from "@alfalab/core-components/icon-view/circle";
import styles from "./index.module.css";

export const SidebarMenu = ({
  isActive,
  handeMenuClose,
}: {
  isActive: boolean;
  handeMenuClose: () => void;
}) => {
  return (
    <React.Fragment>
      <SidePanelResponsive
        className={styles.sideContainer}
        open={isActive}
        placement="right"
        hasCloser={true}
        onClose={handeMenuClose}
        zIndex={70}
      >
        <SidePanelResponsive.Header
          className={styles.header}
          hasCloser={true}
        />
        <SidePanelResponsive.Content className={styles.content}>
          <Typography.TitleResponsive
            view="large"
            tag="h3"
            weight="bold"
            defaultMargins={true}
            font="styrene"
          >
            <NavLink
              onClick={handeMenuClose}
              className={styles.text}
              to="made-in-alfa"
            >
              Сделано в Альфе
            </NavLink>
          </Typography.TitleResponsive>
          <Typography.TitleResponsive
            view="large"
            tag="h3"
            weight="bold"
            defaultMargins={true}
            font="styrene"
          >
            <NavLink
              onClick={handeMenuClose}
              className={styles.text}
              to="own-design"
            >
              Свой дизайн
            </NavLink>
          </Typography.TitleResponsive>
          <Typography.TitleResponsive
            view="large"
            tag="h3"
            weight="bold"
            defaultMargins={true}
            font="styrene"
          >
            <NavLink
              onClick={handeMenuClose}
              className={styles.text}
              to="contacts"
            >
              Контакты
            </NavLink>
          </Typography.TitleResponsive>
        </SidePanelResponsive.Content>
        <SidePanelResponsive.Content className={styles.content}>
          <Typography.Text view="secondary-large" tag="div" weight="medium">
            <NavLink className={styles.text} to="" onClick={handeMenuClose}>
              Политика конфиденциальности и обработки персональных данных
            </NavLink>
          </Typography.Text>
        </SidePanelResponsive.Content>
        <SidePanelResponsive.Footer className={styles.footer}>
          <div>
            <ul className={styles.contactsIcons}>
              <li className={styles.iconContact}>
                <a href="mailto:info@alfabankstore.ru">
                  <Circle
                    backgroundColor="var(--color-light-bg-primary)"
                    size={32}
                  >
                    <MailMIcon className={styles.linkContact} />
                  </Circle>
                </a>
              </li>
              <li className={styles.iconContact}>
                <a href="tel:+7 906 061-60-20">
                  <Circle
                    backgroundColor="var(--color-light-bg-primary)"
                    size={32}
                  >
                    <PhoneMIcon className={styles.linkContact} />
                  </Circle>
                </a>
              </li>
              <li className={styles.iconContact}>
                <a href="https://wa.me/79060616020">
                  <Circle
                    backgroundColor="var(--color-light-bg-primary)"
                    size={32}
                  >
                    <TelegramMIcon className={styles.linkContact} />
                  </Circle>
                </a>
              </li>
            </ul>
          </div>
        </SidePanelResponsive.Footer>
      </SidePanelResponsive>
    </React.Fragment>
  );
};
