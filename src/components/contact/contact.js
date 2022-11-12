import cl from "./contact.module.scss";
import { ContactsIconsSVG } from "../../icons/contact";
import { useState } from "react";
import { toast } from "react-toastify";
import { useStateContext } from "../../context";

export default function Contact() {
  const { scrollToContactSection } = useStateContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const handleFormData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const handleSubminForm = (event) => {
    event.preventDefault();

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "prochivsofia@gmail.com",
      Password: "20BE4493F479F794C2C377E4DE4BD09E06C8",
      Port: 2525,
      To: "prochivsofia@gmail.com",
      From: "prochivsofia@gmail.com",
      Subject: `${formData.name} - ${formData.project}`,
      Body: `EMAIL: ${formData.email} ${formData.message}`,
    }).then(
      setFormData({
        name: "",
        email: "",
        project: "",
        message: "",
      })
    );
    toast.success("EMAIL WAS SEND", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    event.target.reset();
  };
  return (
    <section className={cl.section} id="contact" ref={scrollToContactSection}>
      <h2 className={cl.title}>You have a new project?</h2>
      <p className={cl.subtitle}>Get in touch</p>
      <div className={cl.container}>
        <div className={cl.info__wrapper}>
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
        </div>
        <form className={cl.form} onSubmit={handleSubminForm}>
          <div className={cl.form__inputs}>
            <div className={cl.input__wrapper} id="name">
              <label htmlFor="name" className={cl.label}>
                Name*
              </label>
              <input
                required
                type="text"
                name="name"
                className={cl.input}
                onChange={handleFormData}
              />
            </div>
            <div className={cl.input__wrapper} id="email">
              <label htmlFor="email" className={cl.label}>
                Email*
              </label>
              <input
                required
                type="email"
                name="email"
                className={cl.input}
                onChange={handleFormData}
              />
            </div>
          </div>
          <div className={cl.input__wrapper} id="project">
            <label htmlFor="project" className={cl.label}>
              Project*
            </label>
            <input
              required
              type="text"
              name="project"
              className={cl.input}
              onChange={handleFormData}
            />
          </div>
          <div className={cl.input__wrapper} id="message">
            <label htmlFor="message" className={cl.label}>
              Message*
            </label>
            <textarea
              name="message"
              id=""
              cols="0"
              rows="5"
              className={cl.input}
              onChange={handleFormData}
            />
          </div>
          <div>
            <button
              type="submit"
              id="submit__button"
              className={cl.submit__button}
            >
              Send message <ContactsIconsSVG id="contact" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
