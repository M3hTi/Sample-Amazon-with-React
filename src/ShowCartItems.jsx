import { useEffect, useState } from "react";

function ShowCartItems({ cartItems, setIsOpen }) {
  //   console.log(cartItems);
  const [items, setItems] = useState(cartItems)

  function handleDeleteProduct(product) {
    // console.log(product);
    setItems(items=> items.filter(item => item.id !== product.id ))
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);
  return (
    <div className="cart-container">
      {items.map((item) => (
        <CartItem key={item.id} itemObj={item} onDelete={handleDeleteProduct} />
      ))}
    </div>
  );
}

function CartItem({ itemObj, onDelete }) {
  console.log(itemObj);
  const { image, name, priceCents, quantity } = itemObj;
  const price = (priceCents * quantity) / 100;
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h5>{name}</h5>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p>price: ${price}</p>
            <p>Quantity: {quantity}</p>
          </div>
          <div>
            <button
              style={{ border: "none", cursor: "pointer" }}
              onClick={() => onDelete(itemObj)}
            >
              ❌
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCartItems;
