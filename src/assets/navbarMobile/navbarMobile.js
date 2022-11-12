/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import cl from "./navbarMobile.module.scss";

export default function NavBarMobile() {
  const [selectedOption, setSelectedOption] = useState("home");

  const handleOnSelectOption = (event) => {
    setSelectedOption(event.currentTarget.id);
  };

  return (
    <div className={cl.mobileNavContainer}>
      <ul className={cl.list}>
        <li
          id="home"
          className={selectedOption === "home" ? cl.item__active : cl.item}
          onClick={handleOnSelectOption}
        >
          <a href="#" className={cl.navBtn}>
            <span className={cl.icon}>
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className={cl.text}>Home</span>
          </a>
        </li>
        <li
          id="about"
          className={selectedOption === "about" ? cl.item__active : cl.item}
          onClick={handleOnSelectOption}
        >
          <a href="#" className={cl.navBtn}>
            <span className={cl.icon}>
              <ion-icon name="accessibility-outline"></ion-icon>
            </span>
            <span className={cl.text}>About</span>
          </a>
        </li>
        <li
          id="portfolio"
          className={selectedOption === "portfolio" ? cl.item__active : cl.item}
          onClick={handleOnSelectOption}
        >
          <a href="#" className={cl.navBtn}>
            <span className={cl.icon}>
              <ion-icon name="server-outline"></ion-icon>
            </span>
            <span className={cl.text}>Portfolio</span>
          </a>
        </li>
        <li
          id="contacts"
          className={selectedOption === "contacts" ? cl.item__active : cl.item}
          onClick={handleOnSelectOption}
        >
          <a href="#" className={cl.navBtn}>
            <span className={cl.icon}>
              <ion-icon name="chatbubbles-outline"></ion-icon>
            </span>
            <span className={cl.text}>Contacts</span>
          </a>
        </li>
        <li
          id="settings"
          className={selectedOption === "settings" ? cl.item__active : cl.item}
          onClick={handleOnSelectOption}
        >
          <a href="#" className={cl.navBtn}>
            <span className={cl.icon}>
              <ion-icon name="settings-outline"></ion-icon>
            </span>
            <span className={cl.text}>Settings</span>
          </a>
        </li>
        <div className={cl.indicator}></div>
      </ul>
    </div>
  );
}
