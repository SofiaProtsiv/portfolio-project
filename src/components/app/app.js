import Header from "../header";
import Home from "../home";
import About from "../about";
import "./app.module.scss";
import Skills from "../skills";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
    </>
  );
}
