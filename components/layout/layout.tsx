import React from "react";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import s from "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.content}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
