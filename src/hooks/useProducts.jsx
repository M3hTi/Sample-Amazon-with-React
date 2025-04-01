import { useEffect, useReducer } from "react";

const initialState = {
  products: [],
  // idle, success, loading, error
  status: "idle",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, status: "loading" };
    case "error":
      return { ...state, status: "error" };
    case "success":
      return { ...state, products: action.payload, status: "success" };

    default:
      throw new Error("Action Unknown");
  }
}

export function useProducts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getProducts() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch(`http://localhost:8000/products`);
        if (!res.ok) throw new Error(`Error: ${res.statusText}`);

        const data = await res.json();
        // console.log(data);
        dispatch({ type: "success", payload: data });
      } catch (error) {
        console.log(error.message);
        dispatch({ type: "error" });
      }
    }

    getProducts();
  }, []);

  const { products, status } = state;

  return { products, status };
}
