import Carousel from "./Carousel";
import ProductDisplay from "./ProductDisplay";
import Loader from "./Loader";
import Error from "./Error";
import { useContext } from "react";
import { ProductsContext } from "../pages/HomePage";

function Body({ status }) {
  const { products } = useContext(ProductsContext);
  return (
    <div className="app">
      <Carousel />
      {status === "loading" && <Loader />}
      {status === "success" && products.length > 0 && <ProductDisplay />}
      {status === "error" && <Error />}
    </div>
  );
}

export default Body;
