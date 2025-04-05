import Product from "./Product";
import { ProductsContext } from "../pages/HomePage";
import { useContext } from "react";
function ProductDisplay() {
  const { products } = useContext(ProductsContext);
  return (
    <section className="products-grid">
      {products?.map((product) => (
        <Product key={product.id} productObj={product} />
      ))}
    </section>
  );
}

export default ProductDisplay;
