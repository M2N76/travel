import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";
import "./Card.css";

const INFO = [
  {
    text: "تمام تور ها",
  },
  {
    text: "تور های خارجی",
  },
  {
    text: "تور های داخلی",
  },
  {
    text: "تور یک روزه",
  },
  {
    text: "تور چند روزه",
  },
  {
    text: "تور طبیعت گردی",
  },
  {
    text: "تور ماجراجویانه",
  },
  {
    text: "تور لوکس",
  },
  {
    text: "تور آفر دار",
  },
  {
    text: "تور لحظه آخری",
  },
  {
    text: "تور نمایشگاهی",
  },
  {
    text: "تور سافاری",
  },
  {
    text: "تور داخلی",
  },
  {
    text: "تور خارجی",
  },
  {
    text: "تور کودکان",
  },
  {
    text: "تور تاریخی و فرهنگی",
  },
  {
    text: "تور کوهنوردی",
  },
  {
    text: "تور نوروزی",
  },
  {
    text: "تور اعیاد",
  },
  {
    text: "تور تعطیلات",
  },
  {
    text: "تور ایرانگردی",
  },
  {
    text: "تور ویژه",
  },
  {
    text: "تور جهانگردی",
  },
  {
    text: "تور ویژه",
  },

  {
    text: "تور زیارتی",
  },
  {
    text: "تور مسافرتی",
  },
  {
    text: "تور کویر",
  },
];

function CardGuid() {
  return (
    <>
      <div className="container">
        <div className="tour__tabs">
          <div className="tour__wrapper">
            <ul className="nav-tabs">
              {INFO.map((item, index) => (
                <li key={index}>
                  <Link to="/" className="anchor">
                    <h5>{item.text}</h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="tour__tabs">
        <div className="tab-content">
          <div className="tab-pane">
            <header className="tab-header">
              <div className="tab-text">تور</div>
              <div className="tab-sort-filter tab-text">
                مرتب شده بر اساس
                <span className="selectTours">
                  <select className="tab-sort-input">
                    <option value="newest">جدیدترین</option>
                    <option value="cheapest">ارزان ترین</option>
                    <option value="viewCount">پربازدید ترین</option>
                  </select>
                </span>
              </div>
            </header>
            <div className="tabs-content">
              <ul>
                <li>
                  <Link to="/" className="anchor">
                    <span> تور کیش 2 روز و 3 شب</span>
                    <p>از 1.600.000</p>
                    <p> 3 روز و 2 شب</p>
                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                    <p>شرکت خدمات سفر تعطیلات </p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="anchor">
                    <span> تور کیش 2 روز و 3 شب</span>
                    <p>از 1.600.000</p>
                    <p> 3 روز و 2 شب</p>
                    <p>از 2 آذر 1399 الی 4 آذر 1399</p>
                    <p>شرکت خدمات سفر تعطیلات </p>
                  </Link>
                </li>
              </ul>
              <div className="more-tour-button">
                <Button buttonStyle="btn--tour" buttonSize="btn--large">
                  تور های بیشتر
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardGuid;
