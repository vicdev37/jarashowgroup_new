import React, { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "../components/container/container";
import { Header } from "../components/header/header";
import Layout from "../components/layout/layout";
import { Popup } from "../components/popup";
import { Socials } from "../components/socials";
import { Button } from "../components/UI/button";
import s from "./main_page.module.scss";
import { SectionAbout } from "./main_page/components/section_about";
import { SectionContacts } from "./main_page/components/section_contacts";
import { SectionVideo } from "./main_page/components/section_video";
import { SectionWhy } from "./main_page/components/section_why";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
      <div className={s.content}>
        <div className={s.banner}>
          <div className={s.main_text}>
            <h1 className={s.main_title}>Группа Жара</h1>
            <span className={s.main_description}>Эксклюзивное Кавер-Шоу</span>
            <button className={s.button} onClick={() => setIsOpen(true)}>
              Оставить заявку
            </button>
          </div>
          <Popup active={isOpen} setActive={setIsOpen} />
        </div>

        <div className={s.main}>
          <div className={s.divider}>
            <svg
              width="100%"
              height="100"
              viewBox="0 0 100 102"
              preserveAspectRatio="none"
            >
              <path d="M0 0 L50 100 L100 0 Z" />
            </svg>
          </div>

          <Socials />
          <SectionVideo />
          <SectionAbout />
          <SectionWhy />
          <SectionContacts />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
