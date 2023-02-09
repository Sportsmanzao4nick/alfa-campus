import cn from 'classnames';
import styles from './index.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import {SfCrossMIcon} from '@alfalab/icons-glyph/SfCrossMIcon';
import {MailMIcon} from '@alfalab/icons-glyph/MailMIcon';
import {PhoneMIcon} from '@alfalab/icons-glyph/PhoneMIcon';
import {TelegramMIcon} from '@alfalab/icons-logotype/TelegramMIcon';
import {Typography} from '@alfalab/core-components/typography';
import {SidePanelResponsive} from '@alfalab/core-components/side-panel/responsive';


type Props = {
    isActive: boolean,
    sliderState: () => void;
}

export const Sidebar = ({isActive, sliderState}: Props) => {
    return (
        <div onClick={e => e.stopPropagation()}
             className={isActive ? cn(styles.side_container, styles.trans) : styles.side_container}>
            <SfCrossMIcon onClick={sliderState}
                          className={styles.icon}/>
            <ul className={styles.list}>
                <li className={styles.listitem}>
                    <NavLink onClick={sliderState}
                             className={styles.text} to="made-in-alpha">Сделано
                        в Альфе</NavLink>
                </li>
                <li className={styles.listitem}>
                    <NavLink onClick={sliderState}
                             className={styles.text} to="own-design">Свой
                        дизайн</NavLink>
                </li>
                <li className={styles.listitem}>
                    <NavLink onClick={sliderState}
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


export const SliderTwo = ({isActive, sliderState}: Props) => {

    const Text = () => (
        <p style={{margin: "15px 0 16px"}}>
            Сейчас много говорят об отказах банков в проведении операций, блокировках
            интернет-банка. Это связано с тем, что Центральный банк РФ обязывает банки
            выявлять операции своих клиентов, потенциально нарушающие требования
            Федерального закона «О противодействии легализации (отмыванию) доходов,
            полученных преступным путем, и финансированию терроризма» — 115-ФЗ
        </p>
    );
    return (
        <React.Fragment>
            <SidePanelResponsive
                open={isActive}
                onClose={sliderState}
                size="s"
                placement="right"
                className={styles.side_container}>
                <SidePanelResponsive.Header hasCloser="true"/>
                <SidePanelResponsive.Content>
                    <ul className={styles.list}>
                        <Typography.TitleResponsive
                            view="large"
                            tag="h3"
                            weight="bold"
                            defaultMargins="true"
                            font="styrene">
                            <li className={styles.listitem}>
                                <NavLink onClick={sliderState}
                                         className={styles.text}
                                         to="made-in-alpha">Сделано в Альфе</NavLink>
                            </li>
                        </Typography.TitleResponsive>
                        <Typography.TitleResponsive
                            view="large"
                            tag="h3"
                            weight="bold"
                            defaultMargins="true"
                            font="styrene">
                            <li className={styles.listitem}>
                                <NavLink onClick={sliderState}
                                         className={styles.text}
                                         to="own-design">Свой дизайн</NavLink>
                            </li>
                        </Typography.TitleResponsive>
                        <Typography.TitleResponsive
                            view="large"
                            tag="h3"
                            weight="bold"
                            defaultMargins="true"
                            font="styrene">
                            <li className={styles.listitem}>
                                <NavLink onClick={sliderState}
                                         className={styles.text}
                                         to="contacts">Контакты</NavLink>
                            </li>
                        </Typography.TitleResponsive>
                    </ul>
                    <Text/>
                </SidePanelResponsive.Content>
                <SidePanelResponsive.Footer>
                </SidePanelResponsive.Footer>
            </SidePanelResponsive>
        </React.Fragment>
    )
        ;
};

