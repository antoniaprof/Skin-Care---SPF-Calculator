import React from "react";
import Links from "./Links/Links";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <Logo/> */}
      <Links />
    </header>
  );
};

export default Header;
