import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {BurgerMIcon} from '@alfalab/icons-glyph/BurgerMIcon';
import {Typography} from '@alfalab/core-components/typography';
import {Sidebar} from "../sidebar"

export const Header = () => {
    const [isActive, setActive] = useState(false);
    const handeMenuOpen = () => {
        setActive(!isActive)
    };
    const menuClose = () => {
        setActive(false)
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo__container}>
                <NavLink
                    data-testid="main-page-link"
                    onClick={menuClose}
                    className={styles.logo}
                    to="">
                    <Typography.TitleResponsive
                        className={styles.logo_power}
                        tag="div"
                        weight="bold"
                        view="medium"
                        font="styrene">
                        A-Store
                    </Typography.TitleResponsive>
                </NavLink>
            </div>
            <div onClick={handeMenuOpen}
                 className={styles.links}>
                <BurgerMIcon className={styles.burger}/>
                <Typography.TitleResponsive
                    className={styles.menu}
                    tag="div"
                    weight="bold"
                    view="medium"
                    font="styrene">
                    меню
                </Typography.TitleResponsive>
                <Sidebar isActive={isActive} handeMenuOpen={handeMenuOpen}/>
            </div>
        </div>
    )
}