import { useState } from "react";


import Header from "../components/Header";
import Body from "../components/Body";


function HomePage({products, status}) {
  
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
      console.log(isItemExist);

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
      <Header
        cartItems={shoppingCart}
        query={query}
        setQuery={setQuery}
        onDelete={handleDeleteProduct}
        onUpdate={handleUpdateQuantity}
      />

      <Body products={matchProducts} status={status} onAdd={handleAddToCart} />
    </>
  );
}

export default HomePage;
