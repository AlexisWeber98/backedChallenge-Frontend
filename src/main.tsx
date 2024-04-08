import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./App";
import "./index.css";

axios.defaults.baseURL = "https://back-products.fly.dev/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
