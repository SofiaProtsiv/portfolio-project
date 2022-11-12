import React, { createContext, useContext, useRef } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
  const scrollToTop = useRef(null);
  const scrollToAboutSection = useRef(null);
  const scrollToServicesSection = useRef(null);
  const scrollToSkillsSection = useRef(null);
  const scrollToContactSection = useRef(null);
  const scrollToQualificationSection = useRef(null);
  const scrollToPortfolioSection = useRef(null);

  return (
    <Context.Provider
      value={{
        scrollToAboutSection,
        scrollToServicesSection,
        scrollToSkillsSection,
        scrollToContactSection,
        scrollToQualificationSection,
        scrollToPortfolioSection,
        scrollToTop,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
