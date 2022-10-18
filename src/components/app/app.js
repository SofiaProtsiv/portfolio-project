import React from "react";

import Header from "../header";
import Home from "../home";
import About from "../about";
import Skills from "../skills";
import Qualification from "../qualification";
import Services from "../services";
import Portfolio from "../portfolio";
import Contact from "../contact";
import Footer from "../footer";

import "./app.module.scss";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
