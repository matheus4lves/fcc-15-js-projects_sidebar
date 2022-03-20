import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/styles.css";

import App from "./App";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
