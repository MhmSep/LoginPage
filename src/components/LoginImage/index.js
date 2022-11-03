import React from "react";

//SVG
import DotSvg from "../../assets/images/dotGrid.svg";
import LoginSvg from "../../assets/images/Login3.svg";

import styles from "./style.module.css";

const LoginImage = () => {
  return (
    <div className={styles.background}>
      <img className={styles.dot} src={DotSvg} alt="dotGrid" />
      <a href="#">HOME</a>
      <img className={styles.loginImage} src={LoginSvg} alt="login" />
      <h1>Welcome to our website</h1>
      <img className={styles.dot2} src={DotSvg} alt="dotGrid" />
    </div>
  );
};

export default LoginImage;
