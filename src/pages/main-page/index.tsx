import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import Frame_46 from './img/Frame_46.jpeg';
import Frame_45 from './img/Frame_45.jpeg'
import {Typography} from "@alfalab/core-components/typography";
import React from "react";

export const MainPage = () => {
    return (
        <div data-testid='main-page' className={styles.container}>
            <NavLink className={`${styles.component} ${styles.madeinalpha}`} to="made-in-alpha">
                <div className={styles.header}>
                    <Typography.TitleResponsive
                        view="large"
                        tag="h3"
                        weight="bold"
                        defaultMargins={true}
                        font="styrene">Сделано в Альфе</Typography.TitleResponsive>
                </div>
                <img className={styles.madeinalpha_img} src={Frame_46}/>
            </NavLink>
            <NavLink className={`${styles.component} ${styles.owndesign}`} to="own-design">
                <div className={styles.header}>
                    <Typography.TitleResponsive
                        view="large"
                        tag="h3"
                        weight="bold"
                        defaultMargins={true}
                        font="styrene">Свой дизайн</Typography.TitleResponsive>
                </div>
                <img className={styles.owndesign_img} src={Frame_45}/>
            </NavLink>
        </div>
    )
}

