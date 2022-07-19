import React from "react";
import router, { useRouter } from "next/router";
import s from "./menu.module.scss";
import cn from "classnames";
import Link from "next/link";

type Props = {
  className?: string;
};

const Menu: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const menu = [
    { value: "Команда", href: "/team" },
    { value: "Фото", href: "/photo" },
    { value: "Видео", href: "/video_page" },
    { value: "Музыка", href: "/music" },
    { value: "Репертуар", href: "/repertoire" },
    { value: "Организаторам", href: "/orcs" },
  ];
  return (
    <nav className={cn(className, s.header_navigation)}>
      <ul className={s.header_list}>
        {menu.map((item, i) => (
          <li
            key={i}
            className={
              router.pathname.includes(item.href) ? s.active : s.list_item
            }
          >
            <Link href={item.href}>
              <a>{item.value}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Menu };
