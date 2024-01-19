import React from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assests/img/logo.svg";

function Header() {
  const { pathname } = useLocation();

  return (
    <header className="header">
      <div className="header__container">
        <Link className="header__logo-link" to={(pathname === "/")? "/engineering": "/"}>
          <img src={logo} className="header__logo-image" alt="АО «ФАРУС»" />
        </Link>
        <a
          href="#"
          className="button-menu adaptive"
          data-ix="open-lb-and-box-button"
        >
          заказать звонок
        </a>
        <nav className="header__nav-menu w-nav-menu">
          <a href="o-kompanii.html" className="header__link">
            о компании
          </a>
          <a href="zavod-vzhs.html" className="header__link">
            завод ВЖС
          </a>
          <a href="ingibitory-korrozii.html" className="header__link">
            производство
          </a>
          <a href="katalog.html" className="header__link">
            каталог
          </a>
          <a href="my-v-smi.html" className="header__link">
            мы в СМИ
          </a>
          <a href="kontakty.html" className="header__link">
            контакты
          </a>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="line-burg"></div>
          <div className="line-burg-two"></div>
          <div className="line-burg-three"></div>
        </div>
        <a href="#" className="button-menu w-button">
          заказать звонок
        </a>
      </div>
    </header>
  );
}

export default Header;
