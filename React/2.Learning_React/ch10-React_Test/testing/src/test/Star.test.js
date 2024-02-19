import React from "react";
import ReactDOM from "react-dom";
import Star from "./Star";
import { FaStar } from "react-icons/fa";

test("renders a start", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Star />, div);
  expect(div.querySelector("svg")).toBeTruthy();
});
