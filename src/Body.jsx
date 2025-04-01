import Carousel from "./Carousel";
import ProductDisplay from "./ProductDisplay";
import Loader from "./Loader";
import Error from "./Error";

function Body({ products, status, onAdd }) {
  return (
    <div className="app">
      <Carousel />
      {status === "loading" && <Loader />}
      {status === "success" && products.length > 0 && (
        <ProductDisplay products={products} onAdd={onAdd} />
      )}
      {status === "error" && <Error  />}
    </div>
  );
}

export default Body;
