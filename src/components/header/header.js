import cl from "./header.module.scss";
import { HeaderIconsSVG } from "../../icons/header";
import { useState } from "react";
import classNames from "classnames";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const handleOpenNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <header className={cl.header}>
      <div className={cl.container}>
        <nav className={cl.nav}>
          <a href="#home" className={cl.nav__logo}>
            Sofia
          </a>
          <div
            className={`${cl.nav__menu} ${isNavbarOpen && cl.nav__menu_open}
            `}
          >
            <ul className={`${cl.nav__list} ${cl.grid}`}>
              <li className={cl.nav__item}>
                <a href="#home" className={cl.nav__link}>
                  <HeaderIconsSVG id="home" />
                  Home
                </a>
              </li>
              <li className={cl.nav__item}>
                <a href="#about" className={cl.nav__link}>
                  <HeaderIconsSVG id="about" />
                  About
                </a>
              </li>
              <li className={cl.nav__item}>
                <a href="#skills" className={cl.nav__link}>
                  <HeaderIconsSVG id="skills" />
                  Skills
                </a>
              </li>
              <li className={cl.nav__item}>
                <a href="#services" className={cl.nav__link}>
                  <HeaderIconsSVG id="services" />
                  Services
                </a>
              </li>
              <li className={cl.nav__item}>
                <a href="#portfolio" className={cl.nav__link}>
                  <HeaderIconsSVG id="portfolio" />
                  Portfolio
                </a>
              </li>
              <li className={cl.nav__item}>
                <a href="#contact" className={cl.nav__link}>
                  <HeaderIconsSVG id="contact" />
                  Contact me
                </a>
              </li>
            </ul>
          </div>
          <div className={cl.nav__buttons}>
            <div className={cl.nav__toggle} onClick={handleOpenNavbar}>
              {isNavbarOpen ? (
                <HeaderIconsSVG id="toggle" />
              ) : (
                <HeaderIconsSVG id="close" />
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
