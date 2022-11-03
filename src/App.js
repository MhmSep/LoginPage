import React from "react";
import SigninPage from "./pages/Signin";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.container}>
      <SigninPage />
    </div>
  );
};

export default App;
