import cl from "./footer.module.scss";
import { FooterIconsSVG } from "../../icons/footer";
import { useStateContext } from "../../context";

export default function Footer() {
  const {
    scrollToAboutSection,
    scrollToServicesSection,
    scrollToPortfolioSection,
    scrollToQualificationSection,
  } = useStateContext();
  return (
    <footer className={cl.section} id="footer">
      <div className={cl.section__bg}>
        <div className={cl.container}>
          <div>
            <h3 className={cl.title}>Sofia</h3>
            <span className={cl.subtitle}>Full stack developer</span>
          </div>
          <ul className={cl.links}>
            <li>
              <button
                className={cl.link}
                onClick={() =>
                  scrollToAboutSection?.current?.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                  })
                }
              >
                About
              </button>
            </li>
            <li>
              <button
                className={cl.link}
                onClick={() =>
                  scrollToQualificationSection?.current?.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                  })
                }
              >
                Qualification
              </button>
            </li>
            <li>
              <button
                className={cl.link}
                onClick={() =>
                  scrollToServicesSection?.current?.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                  })
                }
              >
                Services
              </button>
            </li>
            <li>
              <button
                className={cl.link}
                onClick={() =>
                  scrollToPortfolioSection?.current?.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                  })
                }
              >
                Portfolio
              </button>
            </li>
          </ul>
          <div className={cl.social}>
            <a
              href="https://www.linkedin.com/in/sofia-protsiv-9743a6201/"
              target="_blank"
              className={cl.social__link}
              rel="noreferrer"
            >
              <FooterIconsSVG id="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/offi_sofia/"
              target="_blank"
              className={cl.social__link}
              rel="noreferrer"
            >
              <FooterIconsSVG id="instagram" />
            </a>
            <a
              href="https://github.com/SofiaProtsiv"
              target="_blank"
              className={cl.social__link}
              rel="noreferrer"
            >
              <FooterIconsSVG id="github" />
            </a>
          </div>
        </div>
        <p className={cl.copyrights}>© All rights reserved 2022</p>
      </div>
    </footer>
  );
}
