import React from "react";
import ReactDOM from "react-dom/client";
// App
import App from "./App";
// Styles
import "animate.css";
import "remixicon/fonts/remixicon.css";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import "assets/css/antd.css";
import "assets/css/tailwind.css";
import "assets/scss/bootstrap/bootstrap.scss";
import "assets/scss/styles.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
