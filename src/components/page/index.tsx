import styles from "./index.module.css";
import { Header } from "../header";
import { Footer } from "../footer";
import React from "react";
import { Data } from "./types";

export const Page = ({ children }: Data) => {
  return (
    <div className={styles.page}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
