import styles from './index.module.css';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo__container}>
                <NavLink className={styles.logo} to="">A-Store</NavLink>
            </div>
            <div className={styles.menu__container}>
                <NavLink  className={styles.menu__links} to="">
                    <span className={styles.menu__burger}></span>
                    меню</NavLink >
            </div>
        </div>
    )
}