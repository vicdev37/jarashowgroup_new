import React from "react";
import { Menu } from "../menu/menu";
import s from "./mobile_menu.module.scss";
import cn from "classnames";

type Props = {
  className?: string;
};

const MobileMenu: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn(className, s.header_navigation)}>
      <input className={s.menu__toggle} id="menu__toggle" type="checkbox" />
      <label className={s.menu__btn} htmlFor="menu__toggle">
        <span></span>
      </label>
      <div className={s.menu__box}>
        <Menu className={s.mobile__menu} />
      </div>
    </div>
  );
};

export { MobileMenu };
