import React from "react";
import s from "./header.module.scss";

import Link from "next/link";
import Image from "next/image";
import { RunLine } from "./marquee/marquee";
import { Container } from "../container/container";
import { Menu } from "./menu/menu";
import { MobileMenu } from "./mobile_menu/mobile_menu";

export const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <div className={s.header_logo}>
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="logo" width={150} height={100} />
            </a>
          </Link>
        </div>
        <Menu />
        <MobileMenu />
      </Container>
      <RunLine />
    </header>
  );
};
