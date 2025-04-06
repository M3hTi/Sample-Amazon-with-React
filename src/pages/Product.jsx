import { Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Theme from "../components/Theme";

function Product({ products }) {
  const { id } = useParams();
  const navigate = useNavigate()

  const matchProduct = products.find((product) => product.id === id);

  // console.log(matchProduct);

  const { image, name, priceCents } = matchProduct;

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
            <button onClick={() => navigate(-1)}>back to products</button>
          </div>
        </div>
      </div>
      <Theme />
    </>
  );
}

export default Product;
