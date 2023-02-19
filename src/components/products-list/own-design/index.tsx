import React, { useEffect, useState } from "react";
import { Cell } from "../../products-list-item";
import { Products } from "./types";
import { Typography } from "@alfalab/core-components/typography";
import axios from "axios";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";

export const ProductsListOwnDesign = () => {
  const [itemsArr, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("./products-od.json")
      .then((res) => {
        setItems(res.data.groups);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {itemsArr.map((items: Products) => {
        return (
          <div key={items.id} className={styles.cell_container}>
            <Typography.TitleResponsive
              className={styles.container_header}
              color="accent"
              tag="h2"
              weight="bold"
              font="styrene"
            >
              {items.title}
            </Typography.TitleResponsive>
            <Typography.Text
              className={styles.text}
              view="primary-large"
              tag="div"
              weight="medium"
            >
              {items.description}
            </Typography.Text>
            <div className={styles.item_container}>
              {items.products.map((item: Products) => {
                return (
                  <NavLink
                    className={styles.link}
                    to={`/own-design/${item.id}`}
                  >
                    <Cell
                      key={item.id}
                      id={item.id}
                      subtitle={item.subtitle}
                      preview={item.preview}
                      price={item.price}
                      title={item.title}
                      description={item.description}
                    />
                  </NavLink>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
