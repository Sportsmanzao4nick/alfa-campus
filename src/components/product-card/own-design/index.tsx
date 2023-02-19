import React, { useEffect, useState } from "react";
import { Products } from "./types";
import { useParams } from "react-router-dom";
import { ProductCardItem } from "../../product-card-item";
import axios from "axios";
import styles from "./index.module.css";

export const ProductCardOwnDesign = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Products>([]);

  useEffect(() => {
    axios
      .get("/products.json")
      .then((res) => {
        setProduct(res.data.customProducts[`${id}`]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //
  // const  newColorsArr = product.colors?.map((item: string, index :number) => {
  //   index++;
  //     let obj = { content: item };
  //     return obj;
  //   });

  return (
    <div>
      <ProductCardItem
        key={product.id}
        id={product.id}
        images={product.images}
        colors={product.colors}
        preview={product.preview}
        price={product.price}
        title={product.title}
        description={product.description}
        availability={product.availability}
      />
    </div>
  );
};
