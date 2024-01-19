import React from "react";

function TargetsBlock() {
  return (
    <section className="target">
      <div className="target__border"></div>
      <h2 className="target__title">Ключевые цели</h2>
      <div className="target__container">
        <div className="target__circle target__circle_pos_left">
          <h2 className="target__number target__number_pos_left">1</h2>
          Разработка иновационных технических решений
        </div>
        <div className="target__circle target__circle_pos_centr">
          <h2 className="target__number target__number_pos_top">2</h2>
          Интеграция науки&nbsp;и&nbsp;бизнеса
        </div>
        <div className="target__circle target__circle_pos_right">
          <h2 className="target__number target__number_pos_right">3</h2>
          Укрепление технологического суверенитета
        </div>
      </div>
    </section>
  );
}

export default TargetsBlock;
