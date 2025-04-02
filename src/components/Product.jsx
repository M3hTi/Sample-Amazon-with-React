import StarRating from "./StarRating";
import { SiAmazonprime } from "react-icons/si";

import { Icon } from "./Header";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Product({ productObj, onAdd }) {
  const { image, name, priceCents } = productObj;

  const [selectValue, setSelectValue] = useState(1);
  const [userRating, setUserRating] = useState(0);
  const ratingCount = useRef(0);
  const [displayRating, setDisplayRating] = useState({
    count: 0,
    average: 0,
    total: 0,
  });

  function handleBuy() {
    ratingCount.current += 1;

    if (userRating > 0) {
      const newTotal = displayRating.total + userRating;
      const newCount = displayRating.count + 1;
      setDisplayRating({
        count: newCount,
        total: newTotal,
        average: (newTotal / newCount).toFixed(1),
      });
    }

    const newItem = {
      ...productObj,
      quantity: selectValue,
      rating: {
        stars: userRating,
        count: ratingCount.current,
      },
    };

    onAdd(newItem, selectValue);
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{name}</h3>
        <div className="rating">
          <StarRating
            maxRate={5}
            color="rgb(254, 189, 105)"
            onSetRating={setUserRating}
          />
          {displayRating.count > 0 && (
            <div className="rating-stats">
              <span>Average: {displayRating.average} ★</span>
              <span>({displayRating.count} ratings)</span>
            </div>
          )}
        </div>
        <div className="price">${(priceCents / 100).toFixed(2)}</div>
        <div className="prime">
          <Icon icon={<SiAmazonprime />} />
        </div>
        <div className="quantity-selector">
          <label htmlFor="quantity">Qty:</label>
          <select
            id="quantity"
            className="quantity-select"
            value={selectValue}
            onChange={(e) => setSelectValue(Number(e.target.value))}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="btn-container">
          <button className="preview-btn">
            <Link to="/product" state={{ product: productObj }}>
              preview product
            </Link>
          </button>
          <button className="buy-button" onClick={handleBuy}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
