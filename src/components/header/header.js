import cl from "./header.module.scss";
import { HeaderIconsSVG } from "../../icons/header";
import { useState } from "react";
import { useStateContext } from "../../context";
import { useWindowWidth } from "@react-hook/window-size";

export default function Header() {
  const {
    scrollToAboutSection,
    scrollToServicesSection,
    scrollToSkillsSection,
    scrollToContactSection,
    scrollToPortfolioSection,
    scrollToTop,
    scrollToQualificationSection,
  } = useStateContext();

  const [scrolled, setScrolled] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isLightModeSelected, setIsLightModeSelected] = useState(true);
  const [activeNavbarOption, setActiveNavbarOption] = useState("home");

  const onlyWidth = useWindowWidth();

  const handleOpenNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleSelectLightMode = () => {
    isLightModeSelected
      ? document.querySelector("body").classList.add("darkMode")
      : document.querySelector("body").classList.remove("darkMode");

    setIsLightModeSelected(!isLightModeSelected);
  };

  window.addEventListener("scroll", () => {
    const sections = document.getElementsByTagName("section");

    const scrollY = window.pageYOffset;
    for (let item of sections) {
      const sectionId = item.id;
      const sectionHeight = item.offsetHeight;
      const sectionTop = item.offsetTop - 50;

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        setActiveNavbarOption(sectionId);
      }
    }
    return (_) => {
      window.removeEventListener("scroll");
    };
  });

  return (
    <header className={`${cl.header} ${scrolled && cl.header__scrolled}`}>
      <div className={cl.container}>
        <nav className={cl.nav}>
          <button
            onClick={() =>
              scrollToTop?.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
              })
            }
            className={cl.nav__logo}
          >
            Sofia
          </button>
          <div
            className={`${cl.nav__menu} ${isNavbarOpen && cl.nav__menu_open}
            `}
          >
            <ul className={`${cl.nav__list} ${cl.grid}`}>
              <li className={cl.nav__item}>
                <button
                  onClick={() => {
                    scrollToTop?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                    setIsNavbarOpen(!isNavbarOpen);
                  }}
                  className={`${cl.nav__link} ${
                    activeNavbarOption === "home" && cl.nav__link_active
                  }`}
                >
                  <HeaderIconsSVG id="home" />
                  Home
                </button>
              </li>
              <li className={cl.nav__item}>
                <button
                  onClick={() => {
                    scrollToAboutSection?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                    setIsNavbarOpen(!isNavbarOpen);
                  }}
                  className={`${cl.nav__link} ${
                    activeNavbarOption === "about" && cl.nav__link_active
                  }`}
                >
                  <HeaderIconsSVG id="about" />
                  About
                </button>
              </li>
              <li className={cl.nav__item}>
                <button
                  onClick={() => {
                    scrollToSkillsSection?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                    setIsNavbarOpen(!isNavbarOpen);
                  }}
                  className={`${cl.nav__link} ${
                    activeNavbarOption === "skills" && cl.nav__link_active
                  }`}
                >
                  <HeaderIconsSVG id="skills" />
                  Skills
                </button>
              </li>
              <li className={cl.nav__item}>
                <button
                  onClick={() => {
                    scrollToServicesSection?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                    setIsNavbarOpen(!isNavbarOpen);
                  }}
                  className={`${cl.nav__link} ${
                    activeNavbarOption === "services" && cl.nav__link_active
                  }`}
                >
                  <HeaderIconsSVG id="services" />
                  Services
                </button>
              </li>
              {onlyWidth >= 1024 && (
                <li className={cl.nav__item}>
                  <button
                    onClick={() => {
                      scrollToQualificationSection?.current?.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                      });
                      setIsNavbarOpen(!isNavbarOpen);
                    }}
                    className={`${cl.nav__link} ${
                      activeNavbarOption === "qualification" &&
                      cl.nav__link_active
                    }`}
                  >
                    <HeaderIconsSVG id="services" />
                    Qualification
                  </button>
                </li>
              )}
              <li className={cl.nav__item}>
                <button
                  onClick={() => {
                    scrollToPortfolioSection.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                    setIsNavbarOpen(!isNavbarOpen);
                  }}
                  className={`${cl.nav__link} ${
                    activeNavbarOption === "portfolio" && cl.nav__link_active
                  }`}
                >
                  <HeaderIconsSVG id="portfolio" />
                  Portfolio
                </button>
              </li>
              <li className={cl.nav__item}>
                <button
                  onClick={() => {
                    scrollToContactSection?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                    setIsNavbarOpen(!isNavbarOpen);
                  }}
                  className={`${cl.nav__link} ${
                    activeNavbarOption === "contact" && cl.nav__link_active
                  }`}
                >
                  <HeaderIconsSVG id="contact" />
                  Contact me
                </button>
              </li>
            </ul>
          </div>
          <div className={cl.nav__buttons}>
            <div
              className={cl.nav__toggle_theme}
              onClick={handleSelectLightMode}
            >
              {isLightModeSelected ? (
                <HeaderIconsSVG id="lightMode" />
              ) : (
                <HeaderIconsSVG id="darkMode" />
              )}
            </div>
            <div className={cl.nav__toggle_menuBtn} onClick={handleOpenNavbar}>
              {isNavbarOpen ? (
                <HeaderIconsSVG id="close" />
              ) : (
                <HeaderIconsSVG id="toggle" />
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
