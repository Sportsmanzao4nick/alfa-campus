import { boolean, object, string } from "yup";

export const userSchema = object({
  fullName: string().required("Пожалуйста, заполните ФИО"),
  email: string()
    .email("Некорректный e-mail")
    .required("Пожалуйста, заполните e-mail"),
  phone: string().required("Пожалуйста, заполните номер телефона"),
  checkBox: boolean()
    .oneOf([true], "Пожалуйста, заполните согласие на обработку персональных")
    .required(
      "Пожалуйста, заполните согласие на обработку персональных данных"
    ),
});
