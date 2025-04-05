import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

function Product({ products }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const matchProduct = products.find((product) => product.id === id);

  const { image, name, priceCents } = matchProduct;

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
            <button onClick={() => navigate(-1)}>Return To Products</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
