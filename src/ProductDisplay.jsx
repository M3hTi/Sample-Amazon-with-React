import Product from "./Product";
function ProductDisplay({ products }) {
  return (
    <section className="products-grid">
      {products.map((product) => (
        <Product key={product.id} productObj={product} />
      ))}
    </section>
  );
}

export default ProductDisplay;
