import React from "react";
import "./CardGuid.css";
function CardItem(props) {
  const { src, title, text } = props;
  return (
    <>
      <li className="cards__item">
        <div className="compare-item">
          <div className="compare-image-list">
            <img src={src} alt={src} />
            <div class="compere-item-title">{title}</div>
            <div class="compere-item-exp">{text}</div>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
