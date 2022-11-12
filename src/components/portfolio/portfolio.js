/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, FreeMode } from "swiper";
import { PortfolioIconsSVG } from "../../icons/portfolio";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import cl from "./portfolio.module.scss";
import "./swiper.scss";

import { PORTFOLIOS } from "../../database";
import { useStateContext } from "../../context";

export default function Portfolio() {
  const { scrollToPortfolioSection } = useStateContext();

  return (
    <section
      className={cl.section}
      id="portfolio"
      ref={scrollToPortfolioSection}
    >
      <h2 className={cl.title}>Portfolio</h2>
      <span className={cl.subtitle}>Most recent work</span>
      <div className={cl.container}>
        <Swiper
          className={cl.slider}
          modules={[Pagination, Navigation, Keyboard, FreeMode]}
          pagination={{
            clickable: true,
          }}
          keyboard={{
            enabled: true,
          }}
          freeMode={true}
          navigation
          centeredSlides
          loop
          autoplay
          spaceBetween={80}
          slidesPerView={1}
          breakpoints={{
            568: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.5,
            },
          }}
        >
          {PORTFOLIOS.map(({ id, url, preview, title, description }) => (
            <SwiperSlide key={id}>
              <div className={cl.content__wrapper}>
                <div className={cl.content_img_wrapper}>
                  <img alt="" src={preview} className={cl.content__image} />
                </div>
                <div className={cl.content}>
                  <h3 className={cl.content__title}>{title}</h3>
                  <p className={cl.content__description}>{description}</p>
                  <a
                    href={url}
                    target="_blank"
                    className={cl.content__button}
                    rel="noreferrer"
                  >
                    Demo <PortfolioIconsSVG id="arrow-right" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
