import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, status } = useProducts();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage products={products} status={status} />}
          />
          <Route
            path="/product/:id"
            element={<Product products={products} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
