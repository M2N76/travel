import React from "react";
import Button from "../UI/Button/Button";
import "./SignUpForm.css";
function SignUpForm() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <input
          className="text-input"
          type="text"
          placeholder="نام و نام خانوادگی خود را وارد کنید..."
          autoComplete="off"
        />
        <input
          className="text-input"
          type="number"
          placeholder="شماره تماس خود را وارد کنید..."
          autoComplete="off"
        />
        <input
          className="text-input"
          type="email"
          placeholder="ایمیل خود را وارد کنید..."
          autoComplete="off"
        />
        <input
          className="text-input"
          type="password"
          placeholder="رمز مورد نظر خود را وارد کنید..."
          autoComplete="off"
        />
        <input
          className="text-input"
          type="password"
          placeholder="رمز مورد نظر خود را تایید کنید..."
          autoComplete="off"
        />
        <Button buttonStyle="btn--tour" btnSize="btn--large">
          ثبت نام
        </Button>
      </div>
    </div>
  );
}

export default SignUpForm;
