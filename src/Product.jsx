import StarRating from "./StarRating";
import { SiAmazonprime } from "react-icons/si";

import { Icon } from "./Header";
import { useState } from "react";

function Product({ productObj, onAdd }) {
  const { image, name, priceCents } = productObj;

  const [selectValue, setSelectValue] = useState(1);
  const [userRating, setUserRating] = useState(0);

  function handleBuy() {
    // console.log(productObj)
    const newItem = {
      ...productObj,
      quantity: selectValue,
      rating: {
        stars: userRating,
      },
    };

    onAdd(newItem);
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
        <button className="buy-button" onClick={handleBuy}>
          Buy
        </button>
      </div>
    </div>
  );
}

export default Product;
