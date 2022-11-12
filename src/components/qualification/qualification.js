import cl from "./qualification.module.scss";
import { QualificationIconsSVG } from "../../icons/qualification";
import { useState } from "react";
import { useStateContext } from "../../context";

export default function Qualification() {
  const { scrollToQualificationSection } = useStateContext();
  const [selectedOption, setSelectedOption] = useState("work");
  const handleChooseOption = (event) => {
    setSelectedOption(event.currentTarget.id);
  };

  return (
    <section
      className={cl.section}
      id="qualification"
      ref={scrollToQualificationSection}
    >
      <h2 className={cl.title}>Qualification</h2>
      <span className={cl.subtitle}>My personal jorney</span>
      <div className={cl.container}>
        <div className={cl.tabs}>
          <div
            className={`${cl.tab__button} ${
              selectedOption === "study" && cl.active
            }`}
            id="study"
            onClick={handleChooseOption}
          >
            <QualificationIconsSVG id="graduation" />
            Education
          </div>
          <div
            className={`${cl.tab__button} ${
              selectedOption === "work" && cl.active
            }`}
            id="work"
            onClick={handleChooseOption}
          >
            <QualificationIconsSVG id="work" />
            Work
          </div>
        </div>
        <div className={cl.content__sections}>
          {selectedOption === "work" ? (
            <div className={cl.content__wrapper}>
              <div className={cl.content}>
                <div>
                  <h3 className={cl.content__title}>Frontend developer</h3>
                  <span className={cl.content__subtitle}>Remote Helpers</span>
                  <div className={cl.content__calendar}>
                    <QualificationIconsSVG id="calendar" />
                    2022
                  </div>
                </div>
                <div>
                  <span className={cl.progress__rounder}></span>
                  <span className={cl.progress__line}></span>
                </div>
              </div>
              <div className={cl.content}>
                <div></div>
                <div>
                  <span className={cl.progress__rounder}></span>
                  <span className={cl.progress__line}></span>
                </div>
                <div>
                  <h3 className={cl.content__title}>Team Leader</h3>
                  <span className={cl.content__subtitle}>Remote Helpers</span>
                  <div className={cl.content__calendar}>
                    <QualificationIconsSVG id="calendar" /> 2021 - 2022
                  </div>
                </div>
              </div>
              <div className={cl.content}>
                <div>
                  <h3 className={cl.content__title}>Personal Assistant</h3>
                  <span className={cl.content__subtitle}>
                    Syno International
                  </span>
                  <div className={cl.content__calendar}>
                    <QualificationIconsSVG id="calendar" /> 2021 - 2022
                  </div>
                </div>
                <div>
                  <span className={cl.progress__rounder}></span>
                </div>
              </div>
            </div>
          ) : (
            <div className={cl.content__wrapper}>
              <div className={cl.content}>
                <div>
                  <h3 className={cl.content__title}>Full stack developer</h3>
                  <span className={cl.content__subtitle}>GoIT</span>
                  <div className={cl.content__calendar}>
                    <QualificationIconsSVG id="calendar" />
                    2021 - 2022
                  </div>
                </div>
                <div>
                  <span className={cl.progress__rounder}></span>
                  <span className={cl.progress__line}></span>
                </div>
              </div>
              <div className={cl.content}>
                <div></div>
                <div>
                  <span className={cl.progress__rounder}></span>
                  <span className={cl.progress__line}></span>
                </div>
                <div>
                  <h3 className={cl.content__title}>Cybersecurity</h3>
                  <span className={cl.content__subtitle}>DonNU</span>
                  <div className={cl.content__calendar}>
                    <QualificationIconsSVG id="calendar" /> 2019 - 2023
                  </div>
                </div>
              </div>
              <div className={cl.content}>
                <div>
                  <h3 className={cl.content__title}>JS Bootcamp</h3>
                  <span className={cl.content__subtitle}>
                    Astaund Ecommerce
                  </span>
                  <div className={cl.content__calendar}>
                    <QualificationIconsSVG id="calendar" /> 2022
                  </div>
                </div>
                <div>
                  <span className={cl.progress__rounder}></span>
                  <span className={cl.progress__line}></span>
                </div>
              </div>
              <div className={cl.content}>
                <div></div>
                <div>
                  <span className={cl.progress__rounder}></span>
                </div>
                <div>
                  <h3 className={cl.content__title}>IT Project Management</h3>
                  <span className={cl.content__subtitle}>
                    Genesis IT School
                  </span>
                  <div className={cl.content__calendar}>
                    <QualificationIconsSVG id="calendar" /> 2022
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
