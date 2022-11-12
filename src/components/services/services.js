/* eslint-disable no-unused-expressions */
import cl from "./services.module.scss";
import { ServicesIconsSVG } from "../../icons/services";
import { useState } from "react";
import { SERVICES } from "../../database";
import { useStateContext } from "../../context";

export default function Services() {
  const { scrollToServicesSection } = useStateContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleServiceModalOpen = (event) => {
    setIsModalOpen(true);
    setSelectedService(event.target.id);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService("");
  };

  document.onkeydown = function (event) {
    if (event.key === "Escape") {
      setIsModalOpen(false);
    }
  };

  isModalOpen
    ? document.querySelector("body").classList.add("lock")
    : document.querySelector("body").classList.remove("lock");

  return (
    <section className={cl.section} id="services" ref={scrollToServicesSection}>
      <h2 className={cl.title}>Services</h2>
      <span className={cl.subtitle}>What I offer</span>
      <div className={cl.container}>
        {SERVICES.map(({ id, svg_id, service, responsibilities }) => (
          <div className={cl.content__wrapper} key={id}>
            <div>
              <ServicesIconsSVG id={svg_id} />
              <h3 className={cl.content__title}>{service}</h3>
            </div>
            <span
              id={id}
              className={cl.content__button}
              onClick={handleServiceModalOpen}
            >
              View more <ServicesIconsSVG id="arrow-right" />
            </span>
            <div
              onClick={handleCloseModal}
              className={`${cl.content__modal} ${
                id === selectedService && cl.content__modal_open
              } `}
            >
              <div className={cl.modal__content}>
                <h4 className={cl.modal__title}>{service}</h4>
                <div className={cl.modal__close} onClick={handleCloseModal}>
                  <ServicesIconsSVG id="close" />
                </div>
                <ul className={cl.modal__sercices__list}>
                  {responsibilities.map((text) => (
                    <li className={cl.modal__sercices__item} key={text}>
                      <ServicesIconsSVG id="check" />
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
