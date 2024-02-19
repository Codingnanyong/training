import React from "react";
import { FaStar } from "react-icons/fa";

export default function Star({ selected = false }) {
  return <FaStar color={selected ? "red" : "grey"} id="star" />; // id 이름 오타 수정 (start -> star)
}
