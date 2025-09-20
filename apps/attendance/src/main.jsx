import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ shared theme styles
import "@qto/qto-theme/tokens.css";
import "@qto/qto-theme/index.css";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
