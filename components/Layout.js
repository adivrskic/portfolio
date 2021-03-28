import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

import styles from "../styles/layout/Layout.module.scss";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
