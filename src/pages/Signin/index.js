import React from "react";

import LoginImage from "../../components/LoginImage";
import SigninForm from "../../components/SigninForm";

import styles from "./style.module.css";

const SigninPage = () => {
  return (
    <div className={styles.container}>
      <LoginImage />
      <SigninForm />
    </div>
  );
};

export default SigninPage;
