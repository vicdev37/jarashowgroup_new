import classNames from "classnames";
import React from "react";
import s from "./socials.module.scss";
import Image from "next/image";

type Props = {
  className?: string;
};

const Socials: React.FC<Props> = ({ className }) => (
  <ul className={classNames(s.list, className)}>
    <li className={s.item}>
      <a href="https://vk.com/jara_showgroup" target="_blank" rel="noreferrer">
        <Image
          width={30}
          height={30}
          src="/svg/vk.svg"
          className={s.icon}
          alt="vk"
        />
      </a>
    </li>
    <li className={s.item}>
      <a
        href="https://www.youtube.com/c/%D0%9A%D0%B0%D0%B2%D0%B5%D1%80%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D0%B0%D0%96%D0%B0%D1%80%D0%B0"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={30}
          height={30}
          src="/svg/youtube.svg"
          className={s.icon}
          alt="youtube"
        />
      </a>
    </li>
    <li className={s.item}>
      <a
        href="https://www.instagram.com/jara_showgroup/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          width={30}
          height={30}
          src="/svg/instagram.svg"
          className={s.icon}
          alt="instagram"
        />
      </a>
    </li>
    <li className={s.item}>
      <a href="https://wa.me/+79897162307" target="_blank" rel="noreferrer">
        <Image
          width={30}
          height={30}
          src="/svg/whatsapp.svg"
          className={s.icon}
          alt="whatsapp"
        />
      </a>
    </li>
    <li className={s.item}>
      <a href="https://t.me/Viktiv37" target="_blank" rel="noreferrer">
        <Image
          width={30}
          height={30}
          src="/svg/telegram.svg"
          className={s.icon}
          alt="telegram"
        />
      </a>
    </li>
  </ul>
);

export { Socials };
