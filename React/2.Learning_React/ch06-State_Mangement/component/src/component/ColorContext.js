import React, { Children, createContext, useState } from "react";
import colors from "./data/color-data.json";
import { v4 } from "uuid";

// 6.6.1 콘텍스트에 색넣기
// export const ColorContext = createContext();

// render(
//   <ColorContext.Provider value={{ colors }}>
//     <App />
//   </ColorContext.Provider>,
//   document.getElementById("root")
// );

// 6.6.3 상태가 있는 콘텍스트 프로바이터
const ColorContext = createContext();

export default function ColorProvider() {
  const [colors, setColors] = useState(colors);
  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rateing: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id, rating) =>
    setColors(
      colors.map((color) => (color.id === id ? { ...color, rating } : color))
    );

  const removeColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));
  return (
    <ColorContext.Provider value={{ colors, addColor, removeColor, rateColor }}>
      {Children}
    </ColorContext.Provider>
  );
}
