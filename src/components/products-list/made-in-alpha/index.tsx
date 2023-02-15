import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Cell } from "../../products-list-item";
import axios from "axios";

export const ProductsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("./products.json")
      .then((res) => {
        setItems(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      {items.map(
        (item: {
          id: number;
          preview: string;
          price: number;
          title: string;
        }) => {
          return (
            <Cell
              key={item.id}
              preview={item.preview}
              id={item.id}
              price={item.price}
              title={item.title}
            />
          );
        }
      )}
    </div>
  );
};
