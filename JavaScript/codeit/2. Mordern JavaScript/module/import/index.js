import { addMenu } from "./add.js";

const data = [];
const addBtn = document.querySelector(".add-btn");
const addInput = document.querySelector(".add-input");

addBtn.addEventListener("click", () => addMenu(data));
addInput.addEventListener(
  "keypress",
  (e) => e.code === "Enter" && addMenu(data)
);
