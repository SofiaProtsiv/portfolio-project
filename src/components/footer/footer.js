import cl from "./footer.module.scss";
import { FooterIconsSVG } from "../../icons/footer";

export default function Footer() {
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
              <a className={cl.link} href="#about">
                About
              </a>
            </li>
            <li>
              <a className={cl.link} href="#qualification">
                Qualification
              </a>
            </li>
            <li>
              <a className={cl.link} href="#services">
                Services
              </a>
            </li>
            <li>
              <a className={cl.link} href="#portfolio">
                Portfolio
              </a>
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
