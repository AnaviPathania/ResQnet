import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// main.jsx is the entry point of the whole React app.
// It takes our top-level <App /> component and mounts it onto the "root" div in index.html.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* BrowserRouter wraps App so that all routes inside App.jsx function correctly */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);