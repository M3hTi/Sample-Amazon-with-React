import Carousel from "./Carousel";
import ProductDisplay from "./ProductDisplay";
import Loader from "./Loader";
import Error from "./Error";
import Theme from "./Theme";

function Body({ products, status, onAdd }) {
  return (
    <div className="app">
      <Carousel />
      {status === "loading" && <Loader />}
      {status === "success" && products.length > 0 && (
        <ProductDisplay products={products} onAdd={onAdd} />
      )}
      {status === "error" && <Error  />}
      <Theme />
    </div>
  );
}

export default Body;
