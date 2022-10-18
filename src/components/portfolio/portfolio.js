import cl from "./portfolio.module.scss";
import img from "../../icons/img.png";
import { PortfolioIconsSVG } from "../../icons/portfolio";

export default function Portfolio() {
  return (
    <section className={cl.section} id="portfolio">
      <h2 className={cl.title}>Portfolio</h2>
      <span className={cl.subtitle}>Most recent work</span>
      <div className={cl.container}>
        <div className={cl.content__wrapper}>
          <img alt="" src={img} className={cl.content__image} />
          <div className={cl.content}>
            <h3 className={cl.content__title}>Modern Website</h3>
            <p className={cl.content__description}>
              Website adaptive to all devices and lorem
            </p>
            <a href="" className={cl.content__button}>
              Demo <PortfolioIconsSVG id="arrow-right" />
            </a>
          </div>
        </div>
        <div className={cl.content__wrapper}>
          <img alt="" src={img} className={cl.content__image} />
          <div className={cl.content}>
            <h3 className={cl.content__title}>Modern Website</h3>
            <p className={cl.content__description}>
              Website adaptive to all devices and lorem
            </p>
            <a href="" className={cl.content__button}>
              Demo <PortfolioIconsSVG id="arrow-right" />
            </a>
          </div>
        </div>
        <div className={cl.content__wrapper}>
          <img alt="" src={img} className={cl.content__image} />
          <div className={cl.content}>
            <h3 className={cl.content__title}>Modern Website</h3>
            <p className={cl.content__description}>
              Website adaptive to all devices and lorem
            </p>
            <a href="" className={cl.content__button}>
              Demo <PortfolioIconsSVG id="arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
