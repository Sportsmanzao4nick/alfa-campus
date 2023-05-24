import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Data } from "./types";
import { Cart } from "../cart";
import styles from "./index.module.css";

export const Page = ({ children }: Data) => {
  return (
    <div className={styles.page}>
      <Header />
      <div>{children}</div>
      <Cart />
      <Footer />
    </div>
  );
};
