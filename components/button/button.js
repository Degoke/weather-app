import React from "react";
import styles from "./button.module.css";

const Button = ({ handleClick, text }) => {
  return (
    <button
      className={`${styles.button} ${styles.primary}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
