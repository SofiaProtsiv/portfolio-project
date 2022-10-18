import cl from "./services.module.scss";
import { ServicesIconsSVG } from "../../icons/services";
import { useState } from "react";

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const handleServiceModalOpen = (event) => {
    setIsModalOpen(true);
    setSelectedService(event.target.id);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const condition1 = selectedService === "frontend-developer" && isModalOpen;
  const condition2 = selectedService === "project-manager" && isModalOpen;
  console.log(isModalOpen);
  return (
    <section className={cl.section} id="services">
      <h2 className={cl.title}>Services</h2>
      <span className={cl.subtitle}>What I offer</span>
      <div className={cl.container}>
        <div className={cl.content__wrapper}>
          <div>
            <ServicesIconsSVG id="tag" />
            <h3 className={cl.content__title}>
              Frontend <br /> developer
            </h3>
          </div>
          <span
            id="frontend-developer"
            className={cl.content__button}
            onClick={handleServiceModalOpen}
          >
            View more <ServicesIconsSVG id="arrow-right" />
          </span>
          <div
            className={`${cl.content__modal} ${
              condition1 && cl.content__modal_open
            } `}
          >
            <div
              className={cl.modal__content}
              onMouseLeave={handleServiceModalOpen}
            >
              <h4 className={cl.modal__title}>
                Frontend <br /> developer
              </h4>
              <div className={cl.modal__close} onClick={handleCloseModal}>
                <ServicesIconsSVG id="close" />
              </div>
              <ul className={cl.modal__sercices__list}>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>Web page development</p>
                </li>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>I develop mobile apps</p>
                </li>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>I develop websites</p>
                </li>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>I develop websites</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={cl.content__wrapper}>
          <div>
            <ServicesIconsSVG id="kanban" />
            <h3 className={cl.content__title}>
              Project <br /> manager
            </h3>
          </div>
          <span
            id="project-manager"
            className={cl.content__button}
            onClick={handleServiceModalOpen}
          >
            View more <ServicesIconsSVG id="arrow-right" />
          </span>
          <div
            className={`${cl.content__modal} ${
              condition2 && cl.content__modal_open
            }`}
          >
            <div
              className={cl.modal__content}
              onMouseLeave={handleServiceModalOpen}
            >
              <h4 className={cl.modal__title}>
                Project <br /> manager
              </h4>
              <div className={cl.modal__close} onClick={handleServiceModalOpen}>
                <ServicesIconsSVG id="close" />
              </div>
              <ul className={cl.modal__sercices__list}>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>Web page development</p>
                </li>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>I develop mobile apps</p>
                </li>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>I develop websites</p>
                </li>
                <li className={cl.modal__sercices__item}>
                  <ServicesIconsSVG id="check" />
                  <p>I develop websites</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
