import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {Sidebar} from "../sidebar";
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';

export const Header = () => {
    const [isActive, setActive] = useState(false);
    const sliderState = () => {
        setActive(!isActive)
    };
    return (
        <div className={styles.container}>
            <div className={styles.logo__container}>
                <div onClick={sliderState}
                     className={isActive ? styles.container_active : styles.container_off}></div>
                <NavLink className={styles.logo}
                         to="">A-Store</NavLink>
            </div>
            <div onClick={sliderState}
                 className={styles.links}>
                <BurgerMIcon className={styles.burger}/>
                <span className={styles.menu}>меню</span>
                    <Sidebar isActive={isActive}  sliderState = {sliderState}/>
            </div>
        </div>
    )
}