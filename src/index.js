import React from "react";
import ReactDOM from "react-dom";
import { StateProvider } from "./context/StateProvider";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
