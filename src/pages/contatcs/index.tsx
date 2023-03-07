import React from "react";
import { Typography } from "@alfalab/core-components/typography";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./index.module.css";

export const Contacts = () => {
  const defaultState = {
    center: [55.694459, 37.661994],
    zoom: 15,
  };
  const style = {
    width: '100%',
    height: '70%'
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Typography.TitleResponsive
          className={styles.header}
          view="xlarge"
          defaultMargins={true}
          tag="h1"
          weight="bold"
          font="styrene"
        >
          Контакты
        </Typography.TitleResponsive>
      </div>
      <div className={styles.textContainer}>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={true}
        >
          +7 906 061 60 20
          <br />
          info@alfabankstore.ru
        </Typography.Text>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={true}
        >
          г. Москва, пр-т Андропова, 18 корп. 3
        </Typography.Text>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={true}
        >
          пн-чт:
          <br />
          10:00—19:00
          <br />
          пт:
          <br />
          10:00—17:30
        </Typography.Text>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={true}
        >
          Принимаем к оплате карты Visa, Mastercard, МИР.
        </Typography.Text>
        <Typography.Text
          className={styles.text}
          view="primary-large"
          tag="p"
          weight="medium"
          defaultMargins={true}
        >
          Политика конфиденциальностии обработки персональных данных
        </Typography.Text>
      </div>
      <div className={styles.mapsContainer}>
        <YMaps>
          <Map className={styles.maps} defaultState={defaultState}>
            <Placemark geometry={[55.694459, 37.661994]} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};
