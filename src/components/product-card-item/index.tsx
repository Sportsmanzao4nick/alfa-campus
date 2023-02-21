import React, { useEffect, useRef, useState } from "react";
import { Products } from "./types";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { Typography } from "@alfalab/core-components/typography";
import { SelectResponsive } from "@alfalab/core-components/select/responsive";
import { Button } from "@alfalab/core-components/button";
import styles from "./index.module.css";

export const ProductCardItem = ({
  id,
  title,
  description,
  preview,
  images,
  subtitle,
  price,
  colors,
  sizes,
  stickerNumbers,
  availability,
}: Products) => {
  const [initialSlide, setInitialSlide] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (id: number) => {
    setSelectedItem(id);
  };

  const openGallery = (slideIndex: number) => {
    setInitialSlide(slideIndex);
    return slideIndex;
  };

  return (
    <div className={styles.container}>
      <div className={styles.images_container}>
        <img
          className={styles.main_image}
          src={images?.find((i, idx) => idx === initialSlide)}
        />
        <div className={styles.aside_images_container}>
          {images?.map((item: string, index) => {
            return (
              <div>
                <div
                  className={selectedItem === index ? styles.image : ""}
                  key={item}
                  onClick={() => {
                    handleItemClick(index);
                    openGallery(index);
                  }}
                  style={{
                    display: "flex",
                    width: "56px",
                    height: "56px",
                    cursor: "pointer",
                    backgroundSize: "cover",
                    backgroundImage: `url(${item})`,
                    margin: "4px",
                    marginLeft: "0",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <PureCell
        className={styles.cell_container}
        key={id}
        verticalPadding="airy"
        direction="vertical"
      >
        <PureCell.Content>
          <PureCell.Main>
            <Typography.TitleResponsive
              className={styles.text}
              view="xsmall"
              tag="h2"
              weight="medium"
              font="styrene"
              dataTestId="title-item"
            >
              {title}
            </Typography.TitleResponsive>
            <PureCell.Amount
              className={styles.amount}
              minority={1}
              weight="bold"
              currency="RUR"
              value={price}
            />
            <div className={styles.options_selector_container}>
              <div className={styles.selector_container_item}>
                <Typography.TitleResponsive
                  className={styles.selector_text}
                  view="xsmall"
                  tag="h3"
                  weight="medium"
                  font="styrene"
                  dataTestId="title-item"
                >
                  цвет
                </Typography.TitleResponsive>
                <SelectResponsive
                  className={styles.selector_item}
                  allowUnselect={true}
                  size="s"
                  options={colors?.map((i) => ({ content: i, key: i }))}
                  placeholder={colors[0]}
                  block={true}
                />
              </div>
              <div className={styles.selector_container_item}>
                <Typography.TitleResponsive
                  className={styles.selector_text}
                  view="xsmall"
                  tag="h3"
                  weight="medium"
                  font="styrene"
                  dataTestId="title-item"
                >
                  размер
                </Typography.TitleResponsive>
                <SelectResponsive
                  className={styles.selector_item}
                  allowUnselect={true}
                  size="s"
                  options={sizes?.map((i) => ({ content: i, key: i }))}
                  placeholder={sizes[0]}
                  block={true}
                />
              </div>
              <div className={styles.selector_container_item}>
                <Typography.TitleResponsive
                  className={styles.selector_text}
                  view="xsmall"
                  tag="h3"
                  weight="medium"
                  font="styrene"
                  dataTestId="title-item"
                >
                  номер стикера
                </Typography.TitleResponsive>
                <SelectResponsive
                  className={styles.selector_item}
                  allowUnselect={true}
                  size="s"
                  options={stickerNumbers?.map((i) => ({ content: i, key: i }))}
                  placeholder={stickerNumbers[0]}
                  block={true}
                />
              </div>
              <Button size="s" className={styles.button} view="accent">
                В корзину
              </Button>
            </div>
            <div className={styles.description_text_container}>
              <Typography.TitleResponsive
                className={styles.description_text}
                view="xsmall"
                tag="h3"
                weight="medium"
                font="styrene"
                dataTestId="title-item"
              >
                {description}
              </Typography.TitleResponsive>
            </div>
          </PureCell.Main>
        </PureCell.Content>
      </PureCell>
    </div>
  );
};
