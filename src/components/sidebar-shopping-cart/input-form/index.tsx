import React, { useState } from "react";
import { useFormik } from "formik";
import { userSchema } from "../modal-order/Validations/order-validations";
import { Typography } from "@alfalab/core-components/typography";
import { Input } from "@alfalab/core-components/input";
import { PhoneInput } from "@alfalab/core-components/phone-input";
import { RadioGroup } from "@alfalab/core-components/radio-group";
import { Radio } from "@alfalab/core-components/radio";
import { Button } from "@alfalab/core-components/button";
import { Checkbox } from "@alfalab/core-components/checkbox";
import { Textarea } from "@alfalab/core-components/textarea";
import cn from "classnames";
import { PureCell } from "@alfalab/core-components/pure-cell";
import {
  cartSelectors,
  useAppDispatch,
  useAppSelector,
  productsOperations,
} from "../../store/cart";
import { totalWithDelivery } from "../../store/cart/cart-slice";
import styles from "./index.module.css";
import { Order, Product, ValueDelivery } from "./types";

export const InputForm = () => {
  const dispatch = useAppDispatch();
  const productsCart = useAppSelector(cartSelectors.getProducts);
  const totalPrice = useAppSelector(cartSelectors.getTotalPrice);
  const deliveryPrice = useAppSelector(cartSelectors.getDeliveryPrice);
  const totalPriceWithDelivery = useAppSelector(
    cartSelectors.getTotalPriceWithDelivery
  );
  const [checked, setChecked] = useState(false);
  const [deliveryType, setDelivery] = useState("");
  const [paymentType, setPayment] = useState("");
  const [isVisibleButton, setVisibleButton] = useState(false);
  const onChangeDelivery = (event: ValueDelivery) => {
    dispatch(totalWithDelivery(Number(event.target.value)));
    if (Number(event.target.value) === 350) {
      setDelivery("Доставка по России — 350₽");
    }
    if (Number(event.target.value) === 300) {
      setDelivery("Курьером по Москве — 300₽");
    } else {
      setDelivery("Самовывоз (пр-т Андропова, 18 корп. 3)");
    }
  };

  const handleChangeCheckBox = () => {
    setChecked((prev) => !prev);
  };

  const handleChangeButton = () => {
    setVisibleButton(true);
  };

  const onChangePayment = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "one") {
      setPayment("Банковская карта");
    } else {
      setPayment("Промокод");
    }
  };
  let productObj: Product = { id: 0, totalCount: 0, totalPrice: 0 };
  let products: Product[] = [];

  productsCart.forEach((item) => {
    productObj = {
      id: item.id,
      totalPrice: item.price * item.quantity,
      totalCount: item.quantity,
      ...(item.choseColor && { color: item.choseColor }),
      ...(item.choseSize && { model: item.choseSize }),
      ...(item.choseSticker && { stickerNumber: item.choseSticker }),
    };
    products.push(productObj);
  });

  const onSubmit = (values: Order) => {
    const order = {
      name,
      email,
      phone,
      address,
      agreement,
      deliveryType,
      paymentType,
      comments,
      products,
    };
    dispatch(productsOperations.postOrder(order));
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      agreement: checked,
      deliveryType: "",
      paymentType: "",
      comments: "",
      products: [],
    },
    validationSchema: userSchema,
    onSubmit,
  });
  const { name, email, phone, address, comments, agreement } = values;
  values.agreement = checked;

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.inputItemContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          ФИО
        </Typography.TitleResponsive>
        <Input
          block={true}
          placeholder="Фамилия Имя Отчество"
          size="m"
          id="name"
          className={styles.input}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
        />
      </div>
      <div className={styles.inputItemContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          e-mail
        </Typography.TitleResponsive>
        <Input
          block={true}
          placeholder="example@site.ru"
          size="m"
          id="email"
          className={styles.input}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
      </div>
      <div className={styles.inputItemContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          Телефон
        </Typography.TitleResponsive>
        <PhoneInput
          block={true}
          placeholder="+7 000 000 00 00"
          size="m"
          className={styles.input}
          id="phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
        />
      </div>
      <div className={styles.inputItemContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          Адрес(если вы выбрали самовывоз — оставьте поле пустым)
        </Typography.TitleResponsive>
        <Input
          block={true}
          placeholder="Индекс, город, улица, дом, квартира"
          id="address"
          size="m"
          className={styles.input}
          value={values.address}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputItemContainer}>
        <RadioGroup onChange={onChangeDelivery}>
          <Typography.TitleResponsive
            className={styles.titleText}
            view="xsmall"
            tag="h3"
            weight="bold"
            font="styrene"
          >
            Доставка
          </Typography.TitleResponsive>
          <Radio
            label="Доставка по России — 350₽"
            value="350"
            size="m"
            contentClassName={styles.radio}
          />
          <Radio
            label="Курьером по Москве — 300₽"
            value="300"
            size="m"
            contentClassName={styles.radio}
          />
          <Radio
            label="Самовывоз (пр-т Андропова, 18 корп. 3)"
            value="0"
            size="m"
            contentClassName={styles.radio}
          />
        </RadioGroup>
      </div>
      <div className={styles.inputItemContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          Промокод
        </Typography.TitleResponsive>
        <Input
          block={true}
          size="m"
          className={styles.input}
          onClick={handleChangeButton}
          rightAddons={
            <Button
              size="m"
              className={
                isVisibleButton
                  ? styles.buttonCheckPromo
                  : styles.invisibleButton
              }
              view="accent"
            >
              Проверить
            </Button>
          }
        />
      </div>
      <div className={styles.inputItemContainer}>
        <Checkbox
          block={true}
          size="m"
          label="Согласен с политикой конфиденциальности и обработки персональных данных"
          id="agreement"
          onChange={handleChangeCheckBox}
          checked={checked}
          error={errors.agreement}
        />
      </div>
      <div className={styles.inputItemContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          Комментарий к заказу
        </Typography.TitleResponsive>
        <Textarea
          block={true}
          size="m"
          id="comments"
          autosize={false}
          resize="vertical"
          minRows={5}
          className={styles.input}
          value={values.comments}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputItemContainer}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="div"
          weight="medium"
          font="styrene"
        >
          Выберите способ оплаты «Промокод», если ваш заказ не превышает сумму
          промокода. Если больше — выберите оплату картой.
        </Typography.TitleResponsive>
      </div>
      <div className={styles.inputItemContainer}>
        <RadioGroup onChange={onChangePayment}>
          <Radio
            label="Банковская карта"
            value="one"
            size="m"
            contentClassName={styles.radio}
          />
          <Radio
            label="Промокод"
            value="two"
            size="m"
            contentClassName={styles.radio}
          />
        </RadioGroup>
      </div>
      <div className={cn(styles.sumContainer, styles.sumContainerSmallerWidth)}>
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="regular"
          font="styrene"
        >
          Сумма:
        </Typography.TitleResponsive>
        <PureCell.Amount
          className={styles.amountSum}
          minority={1}
          weight="normal"
          value={totalPrice}
          currency="RUR"
        />
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="regular"
          font="styrene"
        >
          Доставка:
        </Typography.TitleResponsive>
        <PureCell.Amount
          className={styles.amountSum}
          minority={1}
          weight="normal"
          value={deliveryPrice}
          currency="RUR"
        />
        <Typography.TitleResponsive
          className={styles.titleText}
          view="xsmall"
          tag="h3"
          weight="bold"
          font="styrene"
        >
          Итоговая сумма:
        </Typography.TitleResponsive>
        <PureCell.Amount
          className={styles.amountSum}
          minority={1}
          weight="bold"
          value={totalPriceWithDelivery ? totalPriceWithDelivery : totalPrice}
          currency="RUR"
        />
      </div>
      <Button
        size="s"
        className={styles.buttonContinue}
        view="accent"
        type="submit"
      >
        Дальше
      </Button>
    </form>
  );
};
