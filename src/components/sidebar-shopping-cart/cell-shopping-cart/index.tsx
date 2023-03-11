import React, { useState } from "react";
import { Button } from "@alfalab/core-components/button";
import { Props } from "./types";
import {CellItem} from "../cell-item";
import { ModalOrder } from "../modal-order";
import styles from "./index.module.css";

export const CellShoppingCart = ({ cartArr, isActive, handeMenuOpen }: Props) => {
  const [isModalActive, setModalActive] = useState(false);
  const handeModalOpen = () => {
    //  Единственный вариант, но он не работает т.к закрывает и модальное окно через несколько секунд
    // isActive && handeMenuOpen();
    setModalActive((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <CellItem cartArr={cartArr}/>
      <Button size="s" className={styles.buttonContinue} view="accent" onClick={handeModalOpen}>
        Дальше
      </Button>
      <ModalOrder
        isModalActive={isModalActive}
        handeModalOpen={handeModalOpen}
        cartArr={cartArr}
      />
    </div>
  );
};
