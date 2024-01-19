import React from "react";

import lineOffice from "../assests/img/line-to-office.svg";
import lineLab from "../assests/img/line-to-lab.svg";
import lineProduct from "../assests/img/line-to-product.svg";

function GeographyBlock() {
  return (
    <section className="geography">
      <h2 className="geography__title">География деятельности </h2>
      <div className="geography__map-wrapper">
        <div className="geography__map">
          <div className="geography__place place-1">
            Головной офис
            <img src={lineOffice} alt="line" className="place__img" />
          </div>
          <div className="geography__place place-2">
            Аналитическая лаборатория
            <img src={lineLab} alt="line" className="place__img" />
          </div>
          <div className="geography__place place-3">
            Научная лаборатория и производственная площадка
            <img src={lineProduct} alt="line" className="place__img" />
          </div>
          <p className="city city-1">Москва</p>
          <p className="city city-2">Казань </p>
          <p className="city city-3">Уфа </p>
          <p className="city city-4">Стерлитамак </p>
          <p className="city city-6">Салават </p>
          <p className="city city-7">Оренбург </p>
        </div>
      </div>
    </section>
  );
}

export default GeographyBlock;
