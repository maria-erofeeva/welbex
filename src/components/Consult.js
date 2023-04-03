import React from "react";

const Consult = () => {
  return (
    <section className="consult">
      <h2 className="consult__title">
        Вместе с{" "}
        <span className="consult__title-span consult__title-span-first">
          бесплатной{" "}
          <span className="consult__title-span consult__title-span-second">
            консультацией
          </span>
        </span>{" "}
        мы дарим:
      </h2>
      <div className="consult__container">
        {document.documentElement.clientWidth > 480 ? (
          <div>
            <h3 className="consult__container-title">Виджеты</h3>
            <p className="consult__container-paragraph">30 готовых решений</p>
          </div>
        ) : (
          <h3 className="consult__container-title"><span className='gradient__dash'>–</span>Skype аудит</h3>
        )}

        {document.documentElement.clientWidth > 480 ? (
          <div>
            <h3 className="consult__container-title">Dashboard</h3>
            <p className="consult__container-paragraph">
              с показателями вашего бизнеса
            </p>
          </div>
        ) : (
          <h3 className="consult__container-title"><span className='gradient__dash'>–</span>30 виджетов</h3>
        )}

        {document.documentElement.clientWidth > 480 ? (
          <div>
            <h3 className="consult__container-title">Skype Аудит</h3>
            <p className="consult__container-paragraph">
              отдела продаж и CRM системы
            </p>
          </div>
        ) : (
          <h3 className="consult__container-title"><span className='gradient__dash'>–</span>Dashboard</h3>
        )}

        {document.documentElement.clientWidth > 480 ? (
          <div>
            <h3 className="consult__container-title">35 дней</h3>
            <p className="consult__container-paragraph">использования CRM</p>
          </div>
        ) : (
          <h3 className="consult__container-title"><span className='gradient__dash'>–</span>Месяц аmoCRM</h3>
        )}
      </div>
      <button className="consult__button">Получить консультацию</button>
    </section>
  );
};

export default Consult;
