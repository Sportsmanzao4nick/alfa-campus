<<<<<<< HEAD
import styles from './index.module.scss';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {MailMIcon} from '@alfalab/icons-glyph/MailMIcon';
import {PhoneMIcon} from '@alfalab/icons-glyph/PhoneMIcon';
import {TelegramMIcon} from '@alfalab/icons-logotype/TelegramMIcon';
import {Typography} from '@alfalab/core-components/typography';
import {SidePanelResponsive} from '@alfalab/core-components/side-panel/responsive';

export const Sidebar = ({isActive, handeMenuOpen}: { isActive: boolean, handeMenuOpen: () => void }) => {
    return (
        <React.Fragment>
            <SidePanelResponsive
                className={styles.side_container}
                open={isActive}
                placement="right">
                <SidePanelResponsive.Header
                    className={styles.header}
                    hasCloser={true}/>
                <SidePanelResponsive.Content
                    className={styles.content}>
                    <Typography.TitleResponsive
                        view="large"
                        tag="h3"
                        weight="bold"
                        defaultMargins={true}
                        font="styrene">
                        <NavLink onClick={handeMenuOpen}
                                 className={styles.text}
                                 to="made-in-alpha">
                            Сделано в Альфе
                        </NavLink>
                    </Typography.TitleResponsive>
                    <Typography.TitleResponsive
                        view="large"
                        tag="h3"
                        weight="bold"
                        defaultMargins={true}
                        font="styrene">
                        <NavLink onClick={handeMenuOpen}
                                 className={styles.text}
                                 to="own-design">
                            Свой дизайн
                        </NavLink>
                    </Typography.TitleResponsive>
                    <Typography.TitleResponsive
                        view="large"
                        tag="h3"
                        weight="bold"
                        defaultMargins={true}
                        font="styrene">
                        <NavLink onClick={handeMenuOpen}
                                 className={styles.text}
                                 to="contacts">
                            Контакты
                        </NavLink>
                    </Typography.TitleResponsive>
                </SidePanelResponsive.Content>
                <SidePanelResponsive.Content className={styles.content}>
                    <Typography.Text
                        view="secondary-large"
                        tag="div"
                        weight="medium">
                        <NavLink className={styles.text} to="">
                            Политика конфиденциальности и обработки персональных данных
                        </NavLink>
                    </Typography.Text>
                </SidePanelResponsive.Content>
                <SidePanelResponsive.Footer className={styles.footer}>
                    <div>
                        <ul className={styles.contacts_icons}>
                            <li className={styles.icon_contact}>
                                <a className={styles.link_contact} href="mailto:info@alfabankstore.ru">
                                    <MailMIcon/>
                                </a>
                            </li>
                            <li className={styles.icon_contact}>
                                <a className={styles.link_contact} href="tel:+7 906 061-60-20">
                                    <PhoneMIcon/>
                                </a>
                            </li>
                            <li className={styles.icon_contact}>
                                <a className={styles.link_contact} href="https://wa.me/79060616020">
                                    <TelegramMIcon/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </SidePanelResponsive.Footer>
            </SidePanelResponsive>
        </React.Fragment>
    );
};
=======
import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import {SfCrossMIcon} from '@alfalab/icons-glyph/SfCrossMIcon';
import {MailMIcon} from '@alfalab/icons-glyph/MailMIcon';
import {PhoneMIcon} from '@alfalab/icons-glyph/PhoneMIcon';
import { TelegramMIcon } from '@alfalab/icons-logotype/TelegramMIcon';

type Props = {
    isActive: boolean,
    sliderState: () => void;
}

export const Sidebar = ({isActive, sliderState}: Props) => {
    console.log(typeof (sliderState))
    return (
        <div onClick={e=> e.stopPropagation()}
             className={isActive ? (styles.side_container + ' ' + styles.trans) : styles.side_container}>
            <SfCrossMIcon onClick={sliderState}
                          className={styles.icon}/>
            <ul className={styles.list}>
                <li className={styles.listitem}>
                    <NavLink onClick={sliderState}
                             className={styles.text} to="made-in-alpha">Сделано
                        в Альфе</NavLink>
                </li>
                <li className={styles.listitem}>
                    <NavLink onClick={sliderState}
                             className={styles.text} to="own-design">Свой
                        дизайн</NavLink>
                </li>
                <li className={styles.listitem}>
                    <NavLink onClick={sliderState}
                             className={styles.text}
                             to="contacts">Контакты</NavLink>
                </li>
            </ul>
            <div className={styles.active_footer}>
                <NavLink className={styles.active_text}
                         to=""> Политика конфиденциальности <br/> и обработки
                    персональных данных </NavLink>
                <ul className={styles.contacts_icons}>
                    <li className={styles.icon_contact}>
                        <a className={styles.link_contact} href="mailto:info@alfabankstore.ru">
                            <MailMIcon/>
                        </a>
                    </li>
                    <li className={styles.icon_contact}>
                        <a className={styles.link_contact} href="tel:+7 906 061-60-20">
                            <PhoneMIcon/>
                        </a>
                    </li>
                    <li className={styles.icon_contact}>
                        <a className={styles.link_contact} href="https://wa.me/79060616020">
                            <TelegramMIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
>>>>>>> main
