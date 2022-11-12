import cl from "./skills.module.scss";
import { SkillsIconsSVG } from "../../icons/skills";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useStateContext } from "../../context";

export default function Skills() {
  const { scrollToSkillsSection } = useStateContext();

  const [isOpenDropdownList, setIsOpenDropdownList] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState("");

  const handleSelectSkill = (event) => {
    setIsOpenDropdownList(!isOpenDropdownList);
    setSelectedSkill(event.currentTarget.id);
  };

  const condition1 = selectedSkill === "frontend" && isOpenDropdownList;
  const condition2 = selectedSkill === "backend" && isOpenDropdownList;

  return (
    <section className={cl.section} id="skills" ref={scrollToSkillsSection}>
      <h2 className={cl.title}>Skills</h2>
      <span className={cl.subtitle}>My technical level</span>
      <div className={cl.container}>
        <div className={cl.content} id="frontend" onClick={handleSelectSkill}>
          <div className={cl.content__header}>
            <SkillsIconsSVG id="frontend" />
            <div>
              <h1 className={cl.content__title}>Frontend developer</h1>
              <span className={cl.content__subtitle}>More than 1 year</span>
            </div>
            <SkillsIconsSVG id="chevron-down" condition={condition1} />
          </div>
          <ul
            className={`${cl.content__list} ${
              condition1 && cl.content__list_open
            }`}
          >
            <li className={cl.content__item}>
              <div className={cl.item__title}>
                <h3 className={cl.item__name}>HTML</h3>
                <span className={cl.item__progress}>90%</span>
              </div>
              <div className={cl.item__skillbar}>
                <span
                  className={classNames(cl.skillbar__progress, cl.html)}
                ></span>
              </div>
            </li>
            <li className={cl.content__item}>
              <div className={cl.item__title}>
                <h3 className={cl.item__name}>CSS</h3>
                <span className={cl.item__progress}>90%</span>
              </div>
              <div className={cl.item__skillbar}>
                <span
                  className={classNames(cl.skillbar__progress, cl.css)}
                ></span>
              </div>
            </li>
            <li className={cl.content__item}>
              <div className={cl.item__title}>
                <h3 className={cl.item__name}>JavaScript</h3>
                <span className={cl.item__progress}>80%</span>
              </div>
              <div className={cl.item__skillbar}>
                <span
                  className={classNames(cl.skillbar__progress, cl.js)}
                ></span>
              </div>
            </li>
            <li className={cl.content__item}>
              <div className={cl.item__title}>
                <h3 className={cl.item__name}>React</h3>
                <span className={cl.item__progress}>80%</span>
              </div>
              <div className={cl.item__skillbar}>
                <span
                  className={classNames(cl.skillbar__progress, cl.react)}
                ></span>
              </div>
            </li>
          </ul>
        </div>

        <div className={cl.content} id="backend" onClick={handleSelectSkill}>
          <div className={cl.content__header}>
            <SkillsIconsSVG id="backend" />
            <div>
              <h1 className={cl.content__title}>Backend developer</h1>
              <span className={cl.content__subtitle}>More than 1 year</span>
            </div>
            <SkillsIconsSVG id="chevron-down" condition={condition2} />
          </div>
          <ul
            className={`${cl.content__list} ${
              condition2 && cl.content__list_open
            }`}
          >
            <li className={cl.content__item}>
              <div className={cl.item__title}>
                <h3 className={cl.item__name}>Node Js</h3>
                <span className={cl.item__progress}>50%</span>
              </div>
              <div className={cl.item__skillbar}>
                <span
                  className={classNames(cl.skillbar__progress, cl.nodejs)}
                ></span>
              </div>
            </li>
            <li className={cl.content__item}>
              <div className={cl.item__title}>
                <h3 className={cl.item__name}>Express</h3>
                <span className={cl.item__progress}>50%</span>
              </div>
              <div className={cl.item__skillbar}>
                <span
                  className={classNames(cl.skillbar__progress, cl.express)}
                ></span>
              </div>
            </li>
            <li className={cl.content__item}>
              <div className={cl.item__title}>
                <h3 className={cl.item__name}>Strapi</h3>
                <span className={cl.item__progress}>50%</span>
              </div>
              <div className={cl.item__skillbar}>
                <span
                  className={classNames(cl.skillbar__progress, cl.strapi)}
                ></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
