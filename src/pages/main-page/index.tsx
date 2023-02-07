import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import Frame_46 from './img/Frame_46.jpeg';
import Frame_45 from './img/Frame_45.jpeg'


export const MainPage = () => {
    return (
        <div className={styles.container}>
            <NavLink className={`${styles.component} ${styles.madeinalpha}`} to="made-in-alpha">
                <h3 className={styles.header}>Сделано в Альфе</h3>
                <img className={styles.madeinalpha_img} src={Frame_46}/>

            </NavLink>
            <NavLink className={`${styles.component} ${styles.owndesign}`} to="own-design">
                <h3 className={styles.header}>Свой дизайн</h3>
                <img className={styles.owndesign_img} src={Frame_45}/>
            </NavLink>
        </div>
    )
}

