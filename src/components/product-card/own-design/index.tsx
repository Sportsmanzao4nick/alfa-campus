import React, { useEffect, useState } from "react";
import { Products } from "./types";
import { useParams } from "react-router-dom";
import { ProductCardItem } from "../../product-card-item";
import axios from "axios";
import styles from "./index.module.css";

export const ProductCardOwnDesign = () => {
  let { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Products| null>(null);

  console.log(id);
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
  console.log(product);

  if (!product) return null;

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
        sizes={product.sizes}
        stickerNumbers={product.stickerNumbers}
        subtitle={product.subtitle}
      />
    </div>
  );
};
