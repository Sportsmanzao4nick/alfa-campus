import React, { useEffect, useState } from "react";
import { Products } from "./types";
import { useParams } from "react-router-dom";
import { Product } from "../../product-card-item";
import axios from "axios";
import styles from "./index.module.css";

export const ProductCardOwnDesign = () => {
  let { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Products | null>(null);

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

  if (!product) return null;

  return <Product product={product} />;
};
