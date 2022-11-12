import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import ScrollToTop from "../scrollToTop";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </React.Fragment>
  );
}
