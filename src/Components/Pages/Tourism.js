import React from "react";
import Button from "../UI/Button/Button";
import CardsGuide from "../Tourism/CardGuid";
import Cards from "../Cards/Cards";
import "../../App.css";

const Tourism = () => {
  return (
    <>
      <div
        className="tourism"
        style={{ backgroundImage: `url(images/tourism.jpg)` }}
      >
        <h1 style={{ color: "#FFF", fontSize: "46px" }}>
          {" "}
          پرتال جامع گردش و سفر{" "}
        </h1>
        <p>پرتال جامع گردش و سفر</p>
        <div className="tourism-box">
          <input
            className="search-input"
            type="text"
            placeholder="جستجوی مکان، شهر، کشور و..."
            autocomplete="off"
          />
          <Button
            className="btn"
            buttonStyle="btn--search--place"
            btnSize="btn--large"
          >
            جستجوی
          </Button>
        </div>
      </div>
      <CardsGuide />
      <Cards />
    </>
  );
};
export default Tourism;
