import Product from "./Product";
function ProductDisplay({ products, onAdd }) {
  return (
    <section className="products-grid">
      {products?.map((product) => (
        <Product key={product.id} productObj={product} onAdd={onAdd} />
      ))}
    </section>
  );
}

export default ProductDisplay;
