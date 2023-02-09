import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {Sidebar} from "../sidebar";
import {BurgerMIcon} from '@alfalab/icons-glyph/BurgerMIcon';
import {Backdrop} from '@alfalab/core-components/backdrop';
import {Typography} from '@alfalab/core-components/typography';
import {SliderTwo} from "../sidebar"

export const Header = () => {
    const [isActive, setActive] = useState(false);
    const sliderState = () => {
        setActive(!isActive)
    };
    return (
        <div className={styles.container}>
            <div className={styles.logo__container}>
                {/*<div onClick={sliderState}*/}
                {/*     className={isActive ? styles.container_active : styles.container_off}></div>*/}
                <div className={styles.container_active}
                     onClick={sliderState}>
                    <Backdrop open={isActive} onClick={() => setActive(false)}/>
                </div>
                <NavLink className={styles.logo} to="">
                    <Typography.TitleResponsive
                        tag="div"
                        weight="bold"
                        view="medium"
                        font="styrene">A-Store</Typography.TitleResponsive>
                </NavLink>
            </div>
            <div onClick={sliderState}
                 className={styles.links}>
                <BurgerMIcon className={styles.burger}/>
                <Typography.TitleResponsive
                    className={styles.menu}
                    tag="div"
                    weight="bold"
                    view="medium"
                    font="styrene">меню</Typography.TitleResponsive>
                <SliderTwo isActive={isActive} sliderState={sliderState}/>
            </div>
        </div>
    )
}