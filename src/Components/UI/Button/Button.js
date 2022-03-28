import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--special",
  "btn--search",
  "btn--search--place",
  "btn--tour",
];
const SIZES = ["btn--medium", "btn--large"];
const Button = (props) => {
  const { children, type, clickHandler, buttonStyle, buttonSize } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={clickHandler}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
export default Button;
