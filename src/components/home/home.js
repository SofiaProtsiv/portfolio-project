import cl from "./home.module.scss";
import { HomeIconsSVG } from "../../icons/home";
import { useStateContext } from "../../context";

export default function Home() {
  const { scrollToTop, scrollToAboutSection, scrollToContactSection } =
    useStateContext();
  return (
    <section className={cl.section} id="home" ref={scrollToTop}>
      <div className={cl.container}>
        <div className={cl.wrapper}>
          <div className={cl.social}>
            <a
              href="https://www.linkedin.com/in/sofia-protsiv-9743a6201/"
              target="_blank"
              className={cl.social__link}
              rel="noreferrer"
            >
              <HomeIconsSVG id="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/offi_sofia/"
              target="_blank"
              className={cl.social__link}
              rel="noreferrer"
            >
              <HomeIconsSVG id="instagram" />
            </a>
            <a
              href="https://github.com/SofiaProtsiv"
              target="_blank"
              className={cl.social__link}
              rel="noreferrer"
            >
              <HomeIconsSVG id="github" />
            </a>
          </div>
          <div className={cl.image}>
            <HomeIconsSVG id="bg-image" />
          </div>
          <div className={cl.content}>
            <h1 className={cl.content__title}>Hi, I'm Sofia</h1>
            <h3 className={cl.content__subtitle}>Full stack developer</h3>
            <p className={cl.content__description}>
              Hight level experience in web design and knowlage, productive
              quality work.
            </p>
            <button
              className={cl.content__button}
              onClick={() =>
                scrollToContactSection?.current?.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                })
              }
            >
              Contact Me <HomeIconsSVG id="contact" />
            </button>
          </div>
        </div>
        <div className={cl.scroll}>
          <button
            onClick={() =>
              scrollToAboutSection?.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
              })
            }
            className={cl.scroll__button}
          >
            <HomeIconsSVG id="mouse" />
            <span className={cl.scroll__text}>Scroll down</span>
            <HomeIconsSVG id="down-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
