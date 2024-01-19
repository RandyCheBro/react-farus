import React from "react";

function PracticeBlock() {
  return (
    <section className="practice">
      <h2 className="practice__title">Что мы проектируем? </h2>
      <div className="practice__container">
        <div className="practice__card card-1">
          <p className="practice__card-description">
            Объекты социальной <br></br>инфраструктуры{" "}
          </p>
        </div>
        <div className="practice__card card-2">
          <p className="practice__card-description">
            Объекты транспортной <br></br>инфраструктуры
          </p>
        </div>
        <div className="practice__card card-3">
          <p className="practice__card-description">
            Объекты нефтяной и газовой <br></br>промышленности
          </p>
        </div>
        <div className="practice__card card-4">
          <p className="practice__card-description">
            Объекты химической <br></br>промышленности
          </p>
        </div>
        <div className="practice__card card-5">
          <p className="practice__card-description">
            Объекты инженерной <br></br>инфраструктуры
          </p>
        </div>
        <div className="practice__card card-6">
          <p className="practice__card-description">
            Объекты <br></br>электроэнергетики
          </p>
        </div>
      </div>
    </section>
  );
}

export default PracticeBlock;
