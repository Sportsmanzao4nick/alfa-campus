import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {Sidebar} from "../sidebar";

export const Header = () => {
    const [isActive, setActive] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.logo__container}>
                <div onClick={() => setActive(!isActive)}
                     className={isActive ? styles.container_active : styles.container_off}></div>
                <NavLink className={styles.logo}
                         to="">A-Store</NavLink>
            </div>
            <div onClick={() => setActive(!isActive)}
                 className={styles.links}>
                <span className={styles.burger}></span>
                меню
                <div className={isActive ? styles.active : styles.burgerlist}>
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}