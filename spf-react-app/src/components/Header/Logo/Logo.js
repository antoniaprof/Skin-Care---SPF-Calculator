import React from "react";
import logo from "../../../resources/logo.png";
import styles from "../Logo/Logo.module.scss"

const Logo = (props) => {
  return <img className={styles.logo} src={logo} alt="logo" />;
};

export default Logo;
