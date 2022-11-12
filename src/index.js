import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./components/app";
import { StateContext } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StateContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContext>
);
