import React from "react";
import telegramPath from "../images/telegram.svg";
import viberPath from "../images/viber.svg";
import whatsappPath from "../images/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <p className="footer__paragraph">О компании</p>
        <ul className="menu">
          <li className="menu__list">
            <a href="&" className="menu__link">
              Партнёрская программа
            </a>
          </li>
          <li className="menu__list">
            <a href="&" className="menu__link">
              Вакансии
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__select">
        <p className="footer__paragraph">Меню</p>
        <ul className="menu">
          <li className="menu__list">
            <a href="&" className="menu__link">
              Расчёт стоимости
            </a>
          </li>
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
              Наши клиенты
            </a>
          </li>
          <li className="menu__list">
            <a href="&" className="menu__link">
              Кейсы
            </a>
          </li>
          {document.documentElement.clientWidth > 480 ? (
            <li className="menu__list">
              <a href="&" className="menu__link">
                Благодарственные письма
              </a>
            </li>
          ) : (
            <li className="menu__list">
              <a href="&" className="menu__link">
                Благодарность клиентов
              </a>
            </li>
          )}

          <li className="menu__list">
            <a href="&" className="menu__link">
              Сертификаты
            </a>
          </li>
          <li className="menu__list">
            <a href="&" className="menu__link">
              Блог на Youtube
            </a>
          </li>
          <li className="menu__list">
            <a href="&" className="menu__link">
              Вопрос / Ответ
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__contacts">
        <p className="footer__paragraph">Контакты</p>
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
        <p className="footer__contacts-address">
          Москва, Путевой проезд 3с1, к 902
        </p>
        <div className="footer__copyright">
          <p className="footer__copyright-rights">
            ©WELBEX 2022. Все права защищены.
          </p>
          <a href="&" className="footer__copyright-policy">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
