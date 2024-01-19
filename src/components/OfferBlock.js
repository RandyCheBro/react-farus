import React from "react";

import line from "../assests/img/line.svg";

function OfferBlock() {
  return (
    <section className="offer">
      <h2 className="offer__title">
        Мы предлагаем полный комплекс
        <br></br>
        инжиниринговых решений и услуг
      </h2>

      <ul className="offer__item-list">
        <img src={line} className="border-image" />
        <li className="offer__item item-1">
          <h2 className="item__number">1</h2>
          <p className="item__description">
            Подготовка лабораторных <br></br>регламентов
          </p>
        </li>
        <li className="offer__item item-2">
          <h2 className="item__number">2</h2>
          <p className="item__description">
            Подготовка технологических <br></br>регламентов
          </p>
        </li>
        <li className="offer__item item-3">
          <h2 className="item__number">3</h2>
          <p className="item__description">
            Разработка исходных данных <br></br>на проектирование
          </p>
        </li>
        <li className="offer__item item-4">
          <h2 className="item__number">4</h2>
          <p className="item__description">Создание пилотных установок</p>
        </li>
        <li className="offer__item item-5">
          <h2 className="item__number">5</h2>
          <p className="item__description">
            Разработка рабочей документации <br></br>эксплуатации пилотных
            установок
          </p>
        </li>
        <li className="offer__item item-6">
          <h2 className="item__number">6</h2>
          <p className="item__description">Маркетинговые исследования</p>
        </li>
      </ul>
    </section>
  );
}

export default OfferBlock;
