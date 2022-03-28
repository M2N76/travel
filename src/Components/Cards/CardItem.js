/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
function CardItem(props) {
  const { src, text, label, path } = props;
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic__wrap" data-category={label}>
            <img
              src={src}
              alt="Travel Picture"
              className="cards__item__img"
            ></img>
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
