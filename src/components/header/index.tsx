import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {SfCrossMIcon} from '@alfalab/icons-glyph/SfCrossMIcon';

const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    return (
        <div className={styles.container}>
            <div onClick={() => setActive(!isActive)}
                 className={styles.links}>
                <span className={styles.burger}></span>
                меню
            </div>
            <div className={isActive ? styles.active : styles.burgerlist}>
                <SfCrossMIcon onClick={() => setActive(!isActive)}
                              className={styles.icon}/>
                <ul className={styles.list}>
                    <li className={styles.listitem}>
                        <NavLink onClick={() => setActive(!isActive)}
                                 className={styles.text} to="made-in-alpha">Сделано
                            в Альфе</NavLink>
                    </li>
                    <li className={styles.listitem}>
                        <NavLink onClick={() => setActive(!isActive)}
                                 className={styles.text} to="own-design">Свой
                            дизайн</NavLink>
                    </li>
                    <li className={styles.listitem}>
                        <NavLink onClick={() => setActive(!isActive)}
                                 className={styles.text}
                                 to="contacts">Контакты</NavLink>
                    </li>
                </ul>
                <div className={styles.active_footer}>
                    <NavLink className={styles.active_text}
                             to=""> Политика конфиденциальности <br/> и обработки
                        персональных
                        данных </NavLink>
                </div>
            </div>
        </div>
    )
}

export const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo__container}>
                <NavLink className={styles.logo}
                         to="">A-Store</NavLink>
            </div>
            <Sidebar/>
        </div>
    )
}