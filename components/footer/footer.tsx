import React from "react";
import { Container } from "../container/container";
import { Menu } from "../header/menu/menu";
import { Socials } from "../socials";
import s from "./footer.module.scss";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <Menu />
        <Socials />
        <div className={s.phone}>
          <span>Телефоны для связи:</span>
          <a href="tel:+79897162307">+7 989 716 23 07</a>
          <a href="tel:+79897162307">+7 950 851 06 06</a>
        </div>
        <div className={s.hashtags}>
          <span>#группауспэшная</span>
          <span>#рэпэртуарбогатейший</span>
        </div>
      </Container>
    </footer>
  );
};
