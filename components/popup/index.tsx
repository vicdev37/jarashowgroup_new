import React from "react";
import { Formik, Field, Form } from "formik";
import s from "./popup.module.scss";
import Image from "next/image";

export const Popup = ({ active, setActive }) => {
  return (
    <div
      className={active ? s.popup_active : s.popup}
      onClick={() => setActive(false)}
    >
      <div className={s.cross}>
        <Image src="/images/cross.png" alt="cross" width={30} height={30} />
      </div>
      <div
        className={active ? s.popup_content_active : s.popup_content}
        onClick={(e) => e.stopPropagation()}
      >
        <Formik
          initialValues={{ name: "", tel: "" }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className={s.form_title}>
              Заполните форму и мы свяжемся с вами!
            </div>
            <Field
              name="name"
              type="text"
              className={s.input}
              placeholder="Имя"
              required
            />
            <Field
              name="tel"
              type="phone"
              className={s.input}
              placeholder="Телефон"
              required
            />
            <button type="submit" className={s.submit}>
              Отправить
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
