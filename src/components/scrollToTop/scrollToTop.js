/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useStateContext } from "../../context";
import cl from "./scrollToTop.module.scss";
export default function ScrollToTop() {
  const { scrollToTop } = useStateContext();
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect((_) => {
    const handleScrollToTop = (_) => {
      window.pageYOffset >= 560
        ? setShowToTopButton(true)
        : setShowToTopButton(false);
    };

    window.addEventListener("scroll", handleScrollToTop);
    return (_) => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);

  return (
    <button
      onClick={() =>
        scrollToTop?.current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        })
      }
      className={showToTopButton ? cl.scrollToTop : cl.scrollToTop_hide}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="scrolltotop bi bi-arrow-up"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          fill="#fff"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        />
      </svg>
    </button>
  );
}
