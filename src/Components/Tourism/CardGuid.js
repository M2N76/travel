import React from "react";
import CardItem from "./CardItem";
import "./CardGuid.css";

function CardsGuide() {
  return (
    <div className="cards">
      <h1>
        بهترین راهنمای ایرانگردی، جهانگردی، خرید بلیط هواپیما، راهنمای اخذ ویزا،
        رزرو هتل و مکان های اقامتی، مکان های گردشگری
      </h1>
      <p>پرتال جامع گردش و سفر</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/compare.png"
              title="دانستنی ها"
              text="معرفی جذابیت های ایران و جهان"
            />
            <CardItem
              src="images/compare.png"
              title="جستجوی پیشرفته"
              text="جستجوی تمامی مقاصد سفرهای شما"
            />
            <CardItem
              src="images/compare.png"
              title="راهنمای جامع گردش و تفریح"
              text="راهنمای سفر به شهرهای ایران و جهان"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardsGuide;
