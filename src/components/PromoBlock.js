import React from "react";

import promoImage from "../assests/img/promo-image.png";
function PromoBlock() {
  return (
    <section className="promo">
      <div className="promo__content">
        <ul className="promo__column-list">
          <li className="promo__list-item">
            <h2 className="list-item__number">111</h2>
            <p className="list-item__text">Сотрудников </p>
          </li>
          <li className="promo__list-item">
            <h2 className="list-item__number">&gt;15</h2>
            <p className="list-item__text">
              Проектных работ, выполненных нашими сотрудниками{" "}
            </p>
          </li>
          <li className="promo__list-item">
            <h2 className="list-item__number">1</h2>
            <p className="list-item__text">
              Год заняло проектирование завода ВЖС{" "}
            </p>
          </li>
        </ul>
        <img className="promo__image" src={promoImage} alt="factory" />
      </div>
      <h2 className="promo__subtitle">
        В результате совместной плодотворной работы <br></br>ООО
        «ФАРУС-Инжиниринг» и ООО «ФАРУС-Синтез» <br></br>4 октября 2023 года
        было получено положительное
        <br></br>заключение ФАУ «Главгосэкспертиза»
        <br></br>
        <strong>по всему проекту</strong>
      </h2>
    </section>
  );
}

export default PromoBlock;
