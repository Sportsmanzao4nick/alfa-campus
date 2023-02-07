import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {Sidebar} from "../sidebar";
import { BurgerMIcon } from '@alfalab/icons-glyph/BurgerMIcon';

// export const ActiveContext = createContext({
//     isActive: true,
//     setActive: () => {},
// });

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
                <BurgerMIcon className={styles.burger}/>
                <span className={styles.menu}>меню</span>
                <div onClick={e=> e.stopPropagation()}
                    className={isActive ? (styles.side_container + ' ' + styles.trans) : styles.side_container}>
                    <Sidebar/>
                </div>
            </div>
        </div>
    )
}