import Carousel from "./Carousel";
import ProductDisplay from "./ProductDisplay";
import Loader from "./Loader";
import Error from "./Error";

function Body({ products, isLoading, error, onAdd }) {
  return (
    <div className="app">
      <Carousel />
      {isLoading && <Loader />}
      {!isLoading && products.length > 0 && (
        <ProductDisplay products={products} onAdd={onAdd} />
      )}
      {error && <Error msg={error} />}
    </div>
  );
}

export default Body;
