import React from "react";
import telegramPath from "../images/telegram.svg";
import viberPath from "../images/viber.svg";
import whatsappPath from "../images/whatsapp.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-image"></div>
        <p className="header__logo-text">
          крупный интегратор CRM в Росcии и ещё 8 странах
        </p>
      </div>
      <ul className="menu">
        <li className="menu__list">
          <a href="&" className="menu__link">
            Услуги
          </a>
        </li>
        <li className="menu__list">
          <a href="&" className="menu__link">
            Виджеты
          </a>
        </li>
        <li className="menu__list">
          <a href="&" className="menu__link">
            Интеграции
          </a>
        </li>
        <li className="menu__list">
          <a href="&" className="menu__link">
            Кейсы
          </a>
        </li>
        {document.documentElement.clientWidth > 480 ? <li className="menu__list">
          <a href="&" className="menu__link">
            Сертификаты
          </a>
        </li> : <></>}
        
      </ul>
      <div className="contacts">
        <a className="contacts__phone" href="tel:+75555555555">
          +7 555 555-55-55
        </a>
        <ul className="contacts__icons">
          <li className="contacts__social-icon">
            <a href="&">
              <img alt="Telegram" src={telegramPath} />
            </a>
          </li>
          <li className="contacts__social-icon">
            <a href="&">
              <img alt="Viber" src={viberPath} />
            </a>
          </li>
          <li className="contacts__social-icon">
            <a href="&">
              <img alt="Whatsapp" src={whatsappPath} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
