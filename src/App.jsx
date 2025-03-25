import Header from "./Header";
import Body from "./Body";
import { useProducts } from "./hooks/useProducts";

import "./App.css";
// import { useEffect, useState } from "react";

function App() {
  const { products, isLoading, error } = useProducts();
  return (
    <>
      <Header />

      <Body products={products} isLoading={isLoading} error={error} />
    </>
  );
}

export default App;
