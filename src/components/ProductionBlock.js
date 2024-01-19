import React from "react";

import lab1 from "../assests/img/lab1.png";
import lab2 from "../assests/img/lab2.png";

function ProductionBlock() {
  return (
    <section className="production">
      <h2 className="production__title">Производственная площадка </h2>
      <div className="production__area">
        <p className="text">Общая площадь: 1200 кв. м.</p>
        <p className="text">Производственная площадь: 1100 кв. м.</p>
      </div>
      <div className="production__content">
        <img className="production__image" src={lab1} alt="laboratory" />
        <div className="content-right">
          <img className="production__image" src={lab2} alt="laboratory" />
          <ul className="production__list">
            <li className="production__list-item">
              производственный комплекс{" "}
            </li>
            <li className="production__list-item">
              складской комплекс для сырья и оборудования{" "}
            </li>
            <li className="production__list-item">операторная</li>
            <li className="production__list-item">лаборатория</li>
            <li className="production__list-item">
              помещение газоразрядных рамп{" "}
            </li>
          </ul>
        </div>
      </div>
      <p className="production__suptitle text">
        Эксплуатация опытно-промышленной установки <br></br>по получению высших
        жирных спиртов и испытательного стенда <br></br>для пилотирования
        нефтехимических процесов{" "}
      </p>
    </section>
  );
}

export default ProductionBlock;
