import Header from "./Header";
import Body from "./Body";
import { useProducts } from "./hooks/useProducts";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { products, isLoading, error } = useProducts();
  const [shoppingCart, setShoppingCart] = useState([]);
  const [query, setQuery] = useState("");

  const matchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  // console.log(matchProducts);

  function handleAddToCart(item) {
    // console.log(item);
    setShoppingCart((s) => [...s, item]);
  }

  return (
    <>
      <Header cartItems={shoppingCart} query={query} setQuery={setQuery} />

      <Body
        products={matchProducts}
        isLoading={isLoading}
        error={error}
        onAdd={handleAddToCart}
      />
    </>
  );
}

export default App;
