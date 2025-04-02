import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";

function Product() {
  const location = useLocation();
  const {
    product: { image, name, priceCents },
  } = location.state;

  console.log(image, name, priceCents);

  return (
    <>
      <Header />
      <div className="product-detail">
        <div className="product-detail-image">
          <img src={image} alt={name} />
        </div>
        <div className="product-detail-info">
          <div>
            <span>product name: {name}</span>
            <span>
              product price:{" "}
              {(priceCents / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </span>
          </div>
          <div>
            <button>
              <Link to="/">Return To Products</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
