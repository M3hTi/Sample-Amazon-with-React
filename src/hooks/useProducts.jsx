import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`http://localhost:5000/products`);
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);

        const data = await res.json();
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  return { products, isLoading, error };
}
