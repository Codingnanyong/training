import React, { useContext } from "react";
import Color from "./Color";
import { ColorContext } from "./ColorContext.js";

export default function ColorList() {
  const { colors } = useContext(ColorContext);
  if (!colors || !colors.length)
    return <div>No Colors Listed (Add a Color)</div>;
  return (
    <div className="color-list">
      {colors.map((color) => (
        <Color key={color.id} {...color} />
      ))}
    </div>
  );
}

// 6.4.2 상호작용을 컴포넌트 트리 위쪽으로 전달하기
// export default function ColorList({
//   colors = [],
//   onRemoveColor = (f) => f,
//   onRateColor = (f) => f,
// }) {
//   if (!colors.length) return <div>No Colors Listed (Added a Color)</div>;
//   return (
//     <div className="color-list">
//       {colors.map((color) => (
//         <Color
//           key={color.id}
//           {...color}
//           onRemove={onRemoveColor}
//           onRate={onRateColor}
//         />
//       ))}
//     </div>
//   );
// }

//  6.4.1 상태를 컴포넌트 트리의 아래로 내려보내기
// export default function ColorList({ colors = [] }) {
//   if (!colors.length) return <div>표시할 색이 없습니다.</div>;
//   return (
//     <div>
//       {colors.map((color) => (
//         <Color key={color.id} {...color} />
//       ))}
//     </div>
//   );
// }
