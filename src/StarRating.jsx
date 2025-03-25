import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

function StarRating({
  maxRate = 10,
  color = "blue",
  size = "1rem",
  onSetRating,
  defaultRating = 0,
}) {
  const [rating, setRating] = useState(defaultRating);

  function handleRate(i) {
    setRating(i + 1);
    onSetRating(i + 1);
  }

  return (
    <div>
      {Array.from({ length: maxRate }, (_, i) => (
        <Star
          key={i}
          index={i}
          color={color}
          size={size}
          onRating={handleRate}
          full={rating >= i + 1}
        />
      ))}
      <span style={{ color: color }}>{rating > 0 && rating}</span>
    </div>
  );
}

function Star({ index, color, size, full, onRating }) {
  return (
    <i
      role="button"
      style={{ color, fontSize: size, cursor: "pointer" }}
      onClick={() => onRating(index)}
    >
      {full ? <FaStar /> : <FaRegStar />}
    </i>
  );
}

export default StarRating;
