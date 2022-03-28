import React from "react";
import "../../App.css";
import CardGuid from "../Tour/CardGuid";
import Button from "../UI/Button/Button";
function Tour() {
  return (
    <>
      <div
        className="tourism"
        style={{ backgroundImage: `url(images/tourism.jpg)` }}
      >
        <div className="tourism-box">
          <input
            className="search-input"
            type="text"
            placeholder="نام شهر یا کشور..."
            autocomplete="off"
          />
          <Button
            className="btn"
            buttonStyle="btn--search--place"
            btnSize="btn--large"
          >
            جستجو
          </Button>
        </div>
      </div>
      <CardGuid />
    </>
  );
}

export default Tour;
