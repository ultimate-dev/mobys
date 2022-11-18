import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./App";
// Styles
import "animate.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import "assets/css/antd.css";
import "assets/scss/theme.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
