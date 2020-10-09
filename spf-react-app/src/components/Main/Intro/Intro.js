import React from "react";
import styles from "./Intro.module.scss";

const Intro = (props) => {
  return (
    <div className={styles.intro}>
      <p className={styles.introText}>{props.text}</p>
    </div>
  );
};

export default Intro;
