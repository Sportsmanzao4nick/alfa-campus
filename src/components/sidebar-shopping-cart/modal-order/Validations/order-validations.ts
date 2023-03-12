import {boolean, object, string} from "yup";

export const userSchema = object({
  fullName: string().required("Обязательное поле"),
  email: string()
    .email("Некорректный e-mail")
    .required("Пожалуйста, заполните все обязательные поля"),
  phone: string().required("Пожалуйста, заполните все обязательные поля"),
  checkBox: boolean().oneOf([true], "Пожалуйста, заполните все обязательные поля")
});
