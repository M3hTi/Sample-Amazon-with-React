import { SiAmazonprime } from "react-icons/si";

import { Icon } from "./Header";

function Product({ productObj }) {
  const { image, name, priceCents } = productObj;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{name}</h3>
        <div className="rating"></div>
        <div className="price">${(priceCents / 100).toFixed(2)}</div>
        <div className="prime">
          <Icon icon={<SiAmazonprime />} />
        </div>
        <div className="quantity-selector">
          <label htmlFor="quantity">Qty:</label>
          <select id="quantity" className="quantity-select">
            {Array.from({ length: 5 }, (_, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <button className="buy-button">Buy</button>
      </div>
    </div>
  );
}

export default Product;
