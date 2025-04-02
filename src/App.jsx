import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
