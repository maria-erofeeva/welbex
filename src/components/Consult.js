import React from "react";

const Consult = () => {
  return (
    <section className="consult">
      <h2 className="consult__title">
        Вместе с{" "}
        <span className="consult__title-span consult__title-span-first">бесплатной <span className="consult__title-span consult__title-span-second">консультацией</span></span> мы дарим:
      </h2>
      <div className="consult__container">
        <div>
          <h3 className="consult__container-title">Виджеты</h3>
          <p className="consult__container-paragraph">30 готовых решений</p>
        </div>
        <div>
          <h3 className="consult__container-title">Dashboard</h3>
          <p className="consult__container-paragraph">
            с показателями вашего бизнеса
          </p>
        </div>
        <div>
          <h3 className="consult__container-title">Skype Аудит</h3>
          <p className="consult__container-paragraph">
            отдела продаж и CRM системы
          </p>
        </div>
        <div>
          <h3 className="consult__container-title">35 дней</h3>
          <p className="consult__container-paragraph">использования CRM</p>
        </div>
      </div>
      <button className="consult__button">Получить консультацию</button>
    </section>
  );
};

export default Consult;
