import React from "react";

import polygon from "../assests/img/polygon.png";
import topLine from "../assests/img/work-line-top.svg";
import bottomLine from "../assests/img/work-line-bottom.svg";

function WorkBlock() {
  return (
    <section className="work">
      <h2 className="work__title">Выполнение работ</h2>
      <div className="work__content">
        <img className="work__image" src={polygon} alt="polygon" />
        <img className="top-line" src={topLine} alt="line" />
        <img className="bottom-line" src={bottomLine} alt="line" />
        <div className="work__list-column">
          <ul className="item-list">
            <li className="list-item item-1">
              <h2 className="item-number">1</h2>
              <p className="item-text">
                Разработка исходно-разрешительной документации
              </p>
            </li>
            <li className="list-item item-2">
              <h2 className="item-number">2</h2>
              <p className="item-text">
                Разработка проектной и рабочей документации{" "}
              </p>
            </li>
            <li className="list-item item-3">
              <h2 className="item-number">3</h2>
              <p className="item-text">Прохождение Госэкзпертизы </p>
            </li>
          </ul>
          <ul className="item-list list-bottom">
            <li className="list-item item-4">
              <h2 className="item-number">4</h2>
              <p className="item-text">Получение разрешения на строительство</p>
            </li>
            <li className="list-item item-5">
              <h2 className="item-number">5</h2>
              <p className="item-text">
                Выполнение строительно-монтажных работ{" "}
              </p>
            </li>
            <li className="list-item item-6">
              <h2 className="item-number">6</h2>
              <p className="item-text">Ввод объекта в эксплуатацию </p>
            </li>
          </ul>
        </div>
      </div>
      <h2 className="work__description">
        В настроящее время в нашей команде более 100 высококвалифицированных
        специалистов, за плечами которых большой опыт работы по выполнению
        проектных работ{" "}
      </h2>
    </section>
  );
}

export default WorkBlock;
