import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";

export default function Color({
  id,
  title,
  color,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash></FaTrash>
      </button>
      <div style={{ height: 50, backgroundColor: color }} />
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
}

// export default function Color({ title, color, rating }) {
//   return (
//     <section>
//       <h1>{title}</h1>
//       <div style={{ height: 50, backgroundColor: color }} />
//       <StarRating selectedStars={rating} />
//     </section>
//   );
// }
