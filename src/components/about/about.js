import cl from "./about.module.scss";
import { AboutIconsSVG } from "../../icons/about";
import CV from "../../database/SOFIA_PROTSIV_CV.pdf";
import video from "../../images/about_gif.mp4";
import { useStateContext } from "../../context";

export default function About() {
  const { scrollToAboutSection } = useStateContext();
  return (
    <section className={cl.section} id="about" ref={scrollToAboutSection}>
      <h2 className={cl.title}>About me</h2>
      <span className={cl.subtitle}>My introduction</span>
      <div className={cl.container}>
        <video className={cl.video} autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
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
