import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
function Cards() {
  return (
    <div className="cards">
      <h1> مقاصد برتر</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              path="/dervices"
              label="ناشناخته ها"
              src="images/9.jpg"
              text="دیدن آبشار در ناشناخته ها"
            />
            <CardItem
              path="/dervices"
              label="ناشناخته ها"
              src="images/8.jpg"
              text="کویری زیبا در قلب ایران"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/2.jpg"
              text="سفری خاطره انگیز در جزایر کارائیب"
              label="لاکچری"
              path="/dervices"
            />
            <CardItem
              src="images/1.jpg"
              text="آرامشی عمیق در رشته کوه های آلپ"
              label="لاکچری"
              path="/dervices"
            />
            <CardItem
              src="images/6.jpg"
              text="تجربه ای متفاوت از گردش در یک شهر"
              label="ناشناخته"
              path="/dervices"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
