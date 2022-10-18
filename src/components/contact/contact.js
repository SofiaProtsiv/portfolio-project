import cl from "./contact.module.scss";
import { ContactsIconsSVG } from "../../icons/contact";

export default function Contact() {
  return (
    <section className={cl.section} id="portfolio">
      <h2 className={cl.title}>You have a new project?</h2>
      <p className={cl.subtitle}>Get in touch</p>
      <div className={cl.container}>
        <div className={cl.content__wrapper}>
          <ContactsIconsSVG id="phone" />
          <div>
            <h3 className={cl.content__title}>Call me</h3>
            <a href="tel:+380680184851" className={cl.content__subtitle}>
              +39 (068) 018-48-51
            </a>
          </div>
        </div>
        <div className={cl.content__wrapper}>
          <ContactsIconsSVG id="email" />
          <div>
            <h3 className={cl.content__title}>Email</h3>
            <a
              target="_blank"
              href="mailto:prochivsofia@gmail.com"
              className={cl.content__subtitle}
              rel="noreferrer"
            >
              prochivsofia@gmail.com
            </a>
          </div>
        </div>
        <div className={cl.content__wrapper}>
          <ContactsIconsSVG id="location" />
          <div>
            <h3 className={cl.content__title}>Location</h3>
            <a
              target="_blank"
              href="https://goo.gl/maps/3UrX89p6usRXmX1m9"
              className={cl.content__subtitle}
              rel="noreferrer"
            >
              Ukraine, Kyiv
            </a>
          </div>
        </div>
        <form className={cl.form}>
          <div className={cl.form__inputs}>
            <div className={cl.input__wrapper}>
              <label htmlFor="" className={cl.label}>
                Name
              </label>
              <input type="text" className={cl.input} />
            </div>
            <div className={cl.input__wrapper}>
              <label htmlFor="" className={cl.label}>
                Email
              </label>
              <input type="email" className={cl.input} />
            </div>
          </div>
          <div className={cl.input__wrapper}>
            <label htmlFor="" className={cl.label}>
              Project
            </label>
            <input type="text" className={cl.input} />
          </div>
          <div className={cl.input__wrapper}>
            <label htmlFor="" className={cl.label}>
              Message
            </label>
            <textarea name="" id="" cols="0" rows="5" className={cl.input} />
          </div>
          <div>
            <a href="#" className={cl.submit__button}>
              Send me
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
