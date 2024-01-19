import React from "react";

function AdvantagesEnginBlock() {
  return (
    <section className="engin">
      <h2 className="engin__title">Преимущества </h2>
      <ul className="engin__item-list">
        <li className="engin__item">
          <div className="engin__circle-img img-1"></div>
          <div className="engin__text-column">
            <h3 className="engin__top-text">
              Наличие высококомпетентных специалистов
            </h3>
            <p className="engin__bottom-text">
              В нашей компании работают инженеры-технологи,
              инженеры-конструкторы, инженеры-проектировщики
            </p>
          </div>
        </li>
        <li className="engin__item">
          <div className="engin__circle-img img-2"></div>
          <div className="engin__text-column">
            <h3 className="engin__top-text">Скорость проектирования</h3>
            <p className="engin__bottom-text">
              Мы гарантируем высокое качество выполнения работ и соблюдение
              сроков
            </p>
          </div>
        </li>
        <li className="engin__item">
          <div className="engin__circle-img img-3"></div>
          <div className="engin__text-column">
            <h3 className="engin__top-text">Индивидуальный подход</h3>
            <p className="engin__bottom-text">
              Выполнение работ по согласованному с заказчиком техническому
              заданию
            </p>
          </div>
        </li>
        <li className="engin__item">
          <div className="engin__circle-img img-4"></div>
          <div className="engin__text-column">
            <h3 className="engin__top-text">
              Сопровождение проекта на всех этапах
            </h3>
            <p className="engin__bottom-text">
              Оказание полного комплекса работ и контроль всех этапов до ввода
              объекта в эксплуатацию
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default AdvantagesEnginBlock;
