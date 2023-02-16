import React, { useEffect, useState } from "react";
import { Cell } from "../../products-list-item";
import { Products } from "./types";
import axios from "axios";
import styles from "./index.module.css";

export const ProductsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("./products-mia.json")
      .then((res) => {
        setItems(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {items.map((item: Products) => {
        return (
          <Cell
            key={item.id}
            preview={item.preview}
            id={item.id}
            price={item.price}
            title={item.title}
            description={item.description}
            images={item.images}
          />
        );
      })}
    </div>
  );
};
