import React, { useEffect, useState } from "react";

// toastify
import { ToastContainer } from "react-toastify";
import { notify } from "../../utils/toast";

// local
import PasswordInput from "../PasswordInput";
import styles from "./style.module.css";
import { validate } from "../../utils/form";

// icons
import GoogleSvg from "../../assets/icons/google.svg";

import "react-toastify/dist/ReactToastify.css";

const SigninForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const trueEmail = "demo@demo.com";

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      (data.password === "123321Alert") &
      (data.email.toLowerCase() === trueEmail.toLowerCase())
    ) {
      notify("Your email and password is corrrect", "success");
    } else {
      notify(
        "Please make sure you entered correct email and password!",
        "error"
      );
    }
  };

  useEffect(() => {
    setErrors({
      email: validate("email", data.email),
      password: validate("password", data.password),
    });
  }, [data])
  

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <p>Already have an account?</p>
        <button>Register</button>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.header}>
          <h1> Hello ! Welcome back.</h1>
          <h3>
            Log in with your data that you entered
            during Your registration.
          </h3>
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.formField}>
            <label>Email address</label>
            <input
              placeholder="Exampl@email.com"
              type="text"
              name="email"
              value={data.name}
              onChange={(e) =>
                setData((prevData) => ({ ...prevData, email: e.target.value }))
              }
            />
            {errors.email && data.email.length !== 0 && <span>{errors.email}</span>}
          </div>
          {/* <div className={styles.formField}>
            <div className={styles.passwordDiv}>
            <label>Password</label>
            <a href="#">Forgot Password</a>
            </div>
            <input placeholder="Enter password" type="password" name="password" />
          </div> */}
          <PasswordInput
            value={data.password}
            onChange={(e) =>
              setData((prevData) => ({ ...prevData, password: e.target.value }))
            }
            error={errors.password}
          />
          <button
            className={
              (errors.email || errors.password)
                ? styles.disableSubmitButton
                : styles.submitButton
            }
            disabled={errors.email || errors.password}
          >
            Start now !
          </button>
        </form>
        <div className={styles.line}>
          <hr />
          <span>OR</span>
        </div>
        <button className={styles.googleSigninButton}>
          <div>
            <img src={GoogleSvg} alt="google" />
            <p>Sign with Google</p>
          </div>
        </button>
        <div className={styles.signup}>
          <p>Don't have an account?</p>
          <a href="#">sign up</a>
        </div>
        <div className={styles.registerHide}>
          <p>Already have an account?</p>
          <button>Register</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SigninForm;
