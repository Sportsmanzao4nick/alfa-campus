import React, { useState } from "react";
import { Products } from "./types";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { Typography } from "@alfalab/core-components/typography";
import { Gallery } from "@alfalab/core-components/gallery";
import { SelectResponsive } from "@alfalab/core-components/select/responsive";
import styles from "./index.module.css";
import { BaseOption } from "@alfalab/core-components/select";

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
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);

  const openGallery = (slideIndex: number) => {
    setInitialSlide(slideIndex);
    setOpen(true);
  };

  const closeGallery = () => {
    setInitialSlide(0);
    setOpen(false);
  };


  // Создание массива объектов цвета для выпадающего меню Select
  const newColorsArr = colors?.map((item: string, index: number) => {
    let obj = { content: item };
    return obj;
  });

  return (
    <div className={styles.container}>
      <div
        style={{ display: "flex", flexWrap: "wrap", maxWidth: "850px" }}
        className={styles.images_container}
      >
        {images?.map((item: string, index) => {
          return (
            <div className={styles.image}>
              <div
                key={item}
                onClick={() => {
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
                }}
              />

              {/*В открытой галерее не грузятся изображения с ошибкой undefined*/}
              <Gallery
                open={open}
                onClose={closeGallery}
                images={images}
                initialSlide={initialSlide}
              />
            </div>
          );
        })}
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
              minority={1}
              weight="bold"
              currency="RUR"
              value={price}
            />
          </PureCell.Main>
          <div
            style={{ width: document.body.clientWidth < 450 ? "100%" : 320 }}
          >

            {/*Данный участок кода работает когда его раскомментировать, но после обновления или сохранения проекта выпадает ошибка
            Cannot read properties of undefined (reading 'forEach')*/}
            {/*<SelectResponsive*/}
            {/*  allowUnselect={true}*/}
            {/*  size="m"*/}
            {/*  options={newColorsArr}*/}
            {/*  placeholder="Цвет"*/}
            {/*  block={true}*/}
            {/*/>*/}
          </div>
        </PureCell.Content>
      </PureCell>
    </div>
  );
};
