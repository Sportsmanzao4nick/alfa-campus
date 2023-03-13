import React, { useState, useMemo, useEffect } from "react";
import { Products } from "./types";
import { PureCell } from "@alfalab/core-components/pure-cell";
import { Typography } from "@alfalab/core-components/typography";
import { SelectResponsive } from "@alfalab/core-components/select/responsive";
import cn from "classnames";
import { Button } from "@alfalab/core-components/button";
import { useAppDispatch } from "../store/cart";
import { addToCart } from "../store/cart/cart-slice";
import styles from "./index.module.css";

export const Product = ({ product }: Products) => {
  const [initialSlide, setInitialSlide] = useState(0);
  const [choseColor, setChoseColor] = useState();
  const [choseSize, setChoseSize] = useState();
  const [choseSticker, setChoseSticker] = useState();

  const handleOpenGallery = (slideIndex: number) => {
    setInitialSlide(slideIndex);
  };

  const selectColor = (option) => {
    setChoseColor(option.selected?.content);
  };

  const selectSize = (option) => {
    setChoseSize(option.selected?.content);
  };

  const selectStickerNumber = (option) => {
    setChoseSticker(option.selected?.content);
  };

  const memoizedColors = useMemo(() => {
    return product.colors?.map((i, index) => ({
      content: i,
      key: i,
    }));
  }, [product.colors]);

  const memoizedSizes = useMemo(() => {
    return product.sizes?.map((i, index) => ({
      content: i,
      key: i,
    }));
  }, [product.sizes]);

  const memoizedStickers = useMemo(() => {
    return product.stickerNumbers?.map((i, index) => ({
      content: i,
      key: i,
    }));
  }, [product.stickerNumbers]);

  useEffect(() => {
    if (memoizedColors?.length > 0) {
      setChoseColor(memoizedColors[0].content);
    }
    if (memoizedSizes?.length > 0) {
      setChoseSize(memoizedSizes[0].content);
    }
    if (memoizedStickers?.length > 0) {
      setChoseSticker(memoizedStickers[0].content);
    }
  }, [memoizedColors, memoizedSizes, memoizedStickers]);

  const { id, title, price } = product;

  const choseImg = product.images?.find((i, idx) => idx === initialSlide);

  const dispatch = useAppDispatch();

  const dispatchAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        choseImg,
        price,
        choseColor,
        choseSize,
        choseSticker,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        <img className={styles.mainImage} src={choseImg} alt="product-image" />
        <div className={styles.asideImagesContainer}>
          {product.images?.map((item: string, index) => {
            return (
              <div
                className={cn(styles.image, {
                  [styles.selectImage]: initialSlide === index,
                })}
                key={item}
                onClick={() => {
                  handleOpenGallery(index);
                }}
                style={{
                  backgroundImage: `url(${item})`,
                }}
              />
            );
          })}
        </div>
      </div>
      <PureCell
        className={styles.cellContainer}
        key={product.id}
        verticalPadding="airy"
        direction="vertical"
      >
        <PureCell.Content>
          <PureCell.Main>
            <div className={styles.mainContainer}>
              <Typography.TitleResponsive
                className={styles.text}
                view="xsmall"
                tag="h2"
                weight="medium"
                font="styrene"
              >
                {product.title}
              </Typography.TitleResponsive>
              <PureCell.Amount
                className={styles.amount}
                minority={1}
                dataTestId="title-item"
                weight="bold"
                currency="RUR"
                value={product.price}
              />
              <div className={styles.optionsContainer}>
                {product.colors && product.colors.length > 0 && (
                  <div className={styles.selectorContainer}>
                    <Typography.TitleResponsive
                      className={styles.selectorText}
                      view="xsmall"
                      tag="h3"
                      weight="medium"
                      font="styrene"
                      dataTestId="title-item"
                    >
                      цвет
                    </Typography.TitleResponsive>
                    <SelectResponsive
                      className={styles.selectorItem}
                      allowUnselect={true}
                      size="s"
                      options={memoizedColors}
                      placeholder={choseColor}
                      block={true}
                      onChange={selectColor}
                    />
                  </div>
                )}
                {product.sizes && product.sizes.length > 0 && (
                  <div className={styles.selectorContainer}>
                    <Typography.TitleResponsive
                      className={styles.selectorText}
                      view="xsmall"
                      tag="h3"
                      weight="medium"
                      font="styrene"
                      dataTestId="title-item"
                    >
                      размер
                    </Typography.TitleResponsive>
                    <SelectResponsive
                      className={styles.selectorItem}
                      allowUnselect={true}
                      size="s"
                      options={memoizedSizes}
                      placeholder={choseSize}
                      block={true}
                      onChange={selectSize}
                    />
                  </div>
                )}
                {product.stickerNumbers &&
                  product.stickerNumbers.length > 0 && (
                    <div className={styles.selectorContainer}>
                      <Typography.TitleResponsive
                        className={styles.selectorText}
                        view="xsmall"
                        tag="h3"
                        weight="medium"
                        font="styrene"
                        dataTestId="title-item"
                      >
                        номер стикера
                      </Typography.TitleResponsive>
                      <SelectResponsive
                        className={styles.selectorItem}
                        allowUnselect={true}
                        size="s"
                        options={memoizedStickers}
                        placeholder={choseSticker}
                        block={true}
                        onChange={selectStickerNumber}
                      />
                    </div>
                  )}
                <Button
                  size="s"
                  className={styles.button}
                  view="accent"
                  onClick={dispatchAddToCart}
                >
                  В корзину
                </Button>
              </div>
              <div className={styles.descriptionContainer}>
                <Typography.TitleResponsive
                  className={styles.descriptionText}
                  view="xsmall"
                  tag="h3"
                  weight="medium"
                  font="styrene"
                  dataTestId="title-item"
                >
                  {product.description}
                </Typography.TitleResponsive>
              </div>
            </div>
          </PureCell.Main>
        </PureCell.Content>
      </PureCell>
    </div>
  );
};
