import { createContext, useState } from "react";

import Header from "../components/Header";
import Body from "../components/Body";
import Theme from "../components/Theme";

export const ProductsContext = createContext();

function HomePage({ products, status }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [query, setQuery] = useState("");

  const matchProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  // console.log(matchProducts);

  function handleAddToCart(item, value) {
    // console.log(item);
    setShoppingCart((shoppingCart) => {
      const isItemExist = shoppingCart.some(
        (cartItem) => cartItem.id === item.id
      );

      if (isItemExist) {
        // Update the quantity of the existing item
        return shoppingCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + value }
            : cartItem
        );
      }
      return [...shoppingCart, item];
    });
  }

  function handleDeleteProduct(item) {
    setShoppingCart((shoppingCart) =>
      shoppingCart.filter((product) => product.id !== item.id)
    );
  }

  function handleUpdateQuantity(product, number) {
    setShoppingCart((shoppingCart) =>
      shoppingCart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: number,
            }
          : item
      )
    );
  }
  return (
    <>
      <ProductsContext.Provider
        value={{
          products: matchProducts,
          onAdd: handleAddToCart,
        }}
      >
        <Header
          cartItems={shoppingCart}
          query={query}
          setQuery={setQuery}
          onDelete={handleDeleteProduct}
          onUpdate={handleUpdateQuantity}
        />

        <Body status={status} />
      </ProductsContext.Provider>
      <Theme />
    </>
  );
}

export default HomePage;
