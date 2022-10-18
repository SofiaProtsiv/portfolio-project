import cl from "./about.module.scss";
import { AboutIconsSVG } from "../../icons/about";
import CV from "../../assets/SOFIA_PROTSIV_CV.pdf";

export default function About() {
  return (
    <section className={cl.section} id="about">
      <h2 className={cl.title}>About me</h2>
      <span className={cl.subtitle}></span>
      <div className={cl.container}>
        <img className={cl.image} alt="" src="" />
        <div className={cl.content}>
          <p className={cl.content__description}>
            Hight level experience in web design and knowlage, productive
            quality work.
          </p>
          <div className={cl.content__info}>
            <div>
              <span className={cl.content__info_title}>01+</span>
              <span className={cl.content__info_name}>
                Years <br /> experiencs
              </span>
            </div>
            <div>
              <span className={cl.content__info_title}>10</span>
              <span className={cl.content__info_name}>
                Completed <br /> projects
              </span>
            </div>
            <div>
              <span className={cl.content__info_title}>1+</span>
              <span className={cl.content__info_name}>
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className={cl.content__buttons}>
            <a download="" href={CV} className={cl.download_link}>
              Download CV <AboutIconsSVG id="download" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
