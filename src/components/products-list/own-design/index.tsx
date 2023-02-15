import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Cell } from "../../products-list-item";
import axios from "axios";
import { Data } from "./types";

export const ProductsListOwnDesign = () => {
  const [itemsArr, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("./products.json")
      .then((res) => {
        setItems(res.data.customProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {itemsArr.map((items: Data) => {
        return (
          <Cell
            key={items.id}
            id={items.id}
            subtitle={items.subtitle}
            preview={items.preview}
            price={items.price}
            title={items.title}
            description={items.description}
          />
        );
      })}
    </div>
  );
};
