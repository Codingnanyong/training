import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import App1 from "../src/Component/Display_List.js";
import App2 from "../src/Component/Emptyl_List.js";
import App3 from "./Component/List_Data.js";
import App4 from "./Component/Conditional_render_prop_function.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
    <App2 />
    <App3 />
    <App4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
