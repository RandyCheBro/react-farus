import React from "react";

function AdvantagesBlock() {
  return (
    <section className="advantage">
      <h1 className="advantage__title">Преимущества сотрудников</h1>
      <ul className="advantage__list">
        <li className="advantage__item">
          <div className="advantage__check-mark"></div>
          <p className="advantage__text">
            Укомплектованный штат высококалифицированных научных сотрудников
          </p>
        </li>
        <li className="advantage__item">
          <div className="advantage__check-mark background-white"></div>
          <p className="advantage__text">
            Наличие аттестованной испытательной химико- аналитической
            лаборатории
          </p>
        </li>
        <li className="advantage__item">
          <div className="advantage__check-mark background-white"></div>
          <p className="advantage__text">
            Успешный опыт в эксплуатации опытно-промышленных установок
          </p>
        </li>
        <li className="advantage__item">
          <div className="advantage__check-mark"></div>
          <p className="advantage__text">
            Сотрудничество с ведущими институтами страны
          </p>
        </li>
        <li className="advantage__item">
          <div className="advantage__check-mark"></div>
          <p className="advantage__text">
            Большой опыт в поставке химических реагентов и оборудования
          </p>
        </li>
        <li className="advantage__item">
          <div className="advantage__check-mark background-white"></div>
          <p className="advantage__text">Наличие сырьевой базы</p>
        </li>
      </ul>
    </section>
  );
}

export default AdvantagesBlock;
