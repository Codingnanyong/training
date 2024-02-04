//import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f, rating }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={() => onSelect(rating)} />
);

const createArray = (length) => Array.from({ length }, (_, i) => i + 1);

export default function StarRating({
  totalStars = 5,
  selectedStars = 0,
  onRate = (f) => f,
}) {
  return (
    <>
      {createArray(totalStars).map((i) => (
        <Star
          key={i}
          selected={selectedStars >= i}
          onSelect={() => onRate(i + 1)}
        />
      ))}
      <p>
        {selectedStars} / {totalStars}
      </p>
    </>
  );
}

// 초기 함수
// export default function StarRating() {
//   return (
//     (<FaStar color="red" />),
//     (<FaStar color="red" />),
//     (<FaStar color="red" />),
//     (<FaStar color="grey" />),
//     (<FaStar color="grey" />)
//   );
// }

// improve
// export default function StarRating({ totalStarts = 5 }) {
//   return createArray(totalStarts).map((n, i) => <Star key={i} />);
// }

//more improve - Hooks
// export default function StarRating({ style = {}, totalStars = 5, ...props }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//     <div style={{ padding: "5px", ...style }} {...props}>
//       {createArray(totalStars).map((n, i) => (
//         <Star
//           key={i}
//           selected={selectedStars > i}
//           onSelect={() => setSelectedStars(i + 1)}
//         />
//       ))}
//       <p>
//         {selectedStars} / {totalStars}
//       </p>
//     </div>
//   );
// }
