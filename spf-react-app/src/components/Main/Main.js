import React from "react";
import picture from "../../resources/picture.png";
import styles from "./Main.module.scss";
import Intro from "./Intro/Intro.js";

const Main = () => {
  return (
    <div className={styles.main}>
      <img
        className={styles.picture}
        src={picture}
        alt="girls just wanna have sun"
      />
      <Intro text={"Find out the best SPF product!"}> </Intro>
    </div>
  );
};

export default Main;
