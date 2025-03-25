import Header from "./Header";
import Body from "./Body";
import { useProducts } from "./hooks/useProducts";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { products, isLoading, error } = useProducts();
  const [shoppingCart, setShoppingCart] = useState([]);

  function handleAddToCart(item) {
    console.log(item)
    setShoppingCart((s) => [...s, item]);
  }

  return (
    <>
      <Header cartItems={shoppingCart} />

      <Body
        products={products}
        isLoading={isLoading}
        error={error}
        onAdd={handleAddToCart}
      />
    </>
  );
}

export default App;
