import { useEffect } from "react";

function ShowCartItems({ cartItems, setIsOpen }) {
  //   console.log(cartItems);
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
      {cartItems.map((item) => (
        <CartItem key={item.id} itemObj={item} />
      ))}
    </div>
  );
}

function CartItem({ itemObj }) {
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
            <button style={{ border: "none", cursor: "pointer" }}>❌</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCartItems;
