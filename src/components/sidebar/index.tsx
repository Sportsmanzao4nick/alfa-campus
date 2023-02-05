import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {SfCrossMIcon} from '@alfalab/icons-glyph/SfCrossMIcon';
import {MailMIcon} from '@alfalab/icons-glyph/MailMIcon';
import {PhoneMIcon} from '@alfalab/icons-glyph/PhoneMIcon';
import { TelegramMIcon } from '@alfalab/icons-logotype/TelegramMIcon';

export const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    return (
        <div className={styles.container}>
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
                    персональных данных </NavLink>
                <ul className={styles.contacts_icons}>
                    <li className={styles.icon_contact}>
                        <a className={styles.link_contact} href="mailto:info@alfabankstore.ru">
                            <MailMIcon/>
                        </a>
                    </li>
                    <li className={styles.icon_contact}>
                        <a className={styles.link_contact} href="tel:+7 906 061-60-20">
                            <PhoneMIcon/>
                        </a>
                    </li>
                    <li className={styles.icon_contact}>
                        <a className={styles.link_contact} href="https://wa.me/79060616020">
                            <TelegramMIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
