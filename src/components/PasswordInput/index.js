import React, { useState } from "react";

// images
import OpenEyeImage from "../../assets/icons/open-eye.png";
import CloseEyeImage from "../../assets/icons/close-eye.png";

import styles from "./style.module.css";

const PasswordInput = ({ onChange, value, error }) => {
  const [isVisible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <div className={styles.formField}>
      <div className={styles.labelContainer}>
        <label>Password</label>
        <a href="#">Forgot Password</a>
      </div>
      <input
        placeholder="Enter password"
        type={!isVisible ? "password" : "text"}
        name="password"
        value={value}
        onChange={onChange}
      />
      { error && value.length !== 0 && <span> {error} </span>}
      <div className={styles.icon} onClick={toggle}>
        {!isVisible ? (
          <img
            src={OpenEyeImage}
            alt="showpass"
            onClick={() => setVisible(true)}
          />
        ) : (
          <img
            src={CloseEyeImage}
            alt="hidepass"
            onClick={() => setVisible(false)}
          />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
