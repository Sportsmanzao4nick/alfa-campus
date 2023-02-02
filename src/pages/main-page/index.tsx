import styles from './index.module.css';
import {NavLink} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={styles.container}>
            <NavLink className={`${styles.component} ${styles.madeinalpha}`} to="made-in-alpha">
                <h3 className={styles.header}>Сделано в Альфе</h3>
            </NavLink>
            <NavLink className={`${styles.component} ${styles.owndesign}`} to="own-design">
                <h3 className={styles.header}>Свой дизайн</h3>
            </NavLink>
        </div>
    )
}

export default MainPage;