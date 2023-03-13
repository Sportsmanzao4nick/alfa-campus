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
import {
  totalWithDelivery,
  addCustomerInfo,
} from "../../store/cart/cart-slice";
import styles from "./index.module.css";

const onSubmit = (values) => {
  console.log("values", { values });
};

export const InputForm = () => {
  const [checked, setChecked] = useState(false);
  const [isVisibleButton, setVisibleButton] = useState(false);
  const onChangeDelivery = (event) => {
    dispatch(totalWithDelivery(Number(event.target.value)));
  };

  const handleChangeCheckBox = () => {
    setChecked((prev) => !prev);
  };

  const handleChangeButton = () => {
    setVisibleButton(true);
  };
  const dispatch = useAppDispatch();
  const cart = useAppSelector(cartSelectors.getCart);
  const totalPrice = useAppSelector(cartSelectors.getTotalPrice);
  const deliveryPrice = useAppSelector(cartSelectors.getDeliveryPrice);
  const totalPriceWithDelivery = useAppSelector(
    cartSelectors.getTotalPriceWithDelivery
  );

  const submitData = () => {
    dispatch(
      addCustomerInfo({
        fullName,
        email,
        phone,
        address,
        comments,
      })
    );
    const order = {
      cart: cart,
      customerInfo: {
        fullName: fullName,
        email: email,
        phone: phone,
        address: address,
        comments: comments,
        checkBox: checkBox,
      },
    };
    dispatch(productsOperations.postOrder(order));
    console.log(order);
  };

  const {
    values,
    errors,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      comments: "",
      checkBox: checked,
    },
    validationSchema: userSchema,
    onSubmit,
  });
  const { fullName, email, phone, address, comments, checkBox } = values;
  values.checkBox = checked;
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
          id="fullName"
          className={styles.input}
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.fullName}
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
          id="checkBox"
          onChange={handleChangeCheckBox}
          checked={checked}
          error={errors.checkBox}
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
        <RadioGroup>
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
        onClick={submitData}
      >
        Дальше
      </Button>
    </form>
  );
};
