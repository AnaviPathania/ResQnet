// main.jsx is the entry point of the whole React app.
// It takes our top-level <App /> component and mounts it onto the "root" div in index.html.

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // enables React Router for the whole app
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter must wrap App so that every page inside App can use routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);