//import { useState } from "react";
//import { v4 } from "uuid";  React Form
//import colorData from "./data/color-data.json"; // React Component Tree
import React from "react";
import ColorList from "./component/ColorList.js";
import AddColorForm from "./component/AddColorForm.js";

export default function App() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}

// React Form
// export default function App() {
//   const [colors, setColors] = useState(colorData);
//   return (
//     <>
//       <AddColorForm
//         onNewColor={(title, color) => {
//           const newColors = [
//             ...colors,
//             {
//               id: v4(),
//               rating: 0,
//               title,
//               color,
//             },
//           ];
//           setColors(newColors);
//         }}
//       ></AddColorForm>
//       <ColorList
//         colors={colors}
//         onRateColor={(id, rating) => {
//           const newColors = colors.map((color) =>
//             color.is === id ? { ...color, rating } : color
//           );
//           setColors(newColors);
//         }}
//         onRemoveColor={(id) => {
//           const newColors = colors.filter((color) => color.id !== id);
//           setColors(newColors);
//         }}
//       />
//     </>
//   );
// }

// Before
// export default function App() {
//   return (
//     <StarRating
//       style={{ backgroundColor: "lightblue" }}
//       onDoubleClick={(e) => alert("double click")}
//     />
//   );
// }
