import { useEffect, useState } from "react";

function ShowCartItems({ cartItems, setIsOpen, onDelete, onUpdate }) {
  //   console.log(cartItems);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);
  return (
    <div className="cart-container">
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          itemObj={item}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

function CartItem({ itemObj, onDelete, onUpdate }) {
  // console.log(itemObj);
  const [isEditingQuantity, setIsEditingQuantity] = useState(false);

  const { image, name, priceCents, quantity } = itemObj;
  const price = (priceCents * quantity) / 100;

  const [qtyValue, setQtyValue] = useState(quantity);

  function editProduct() {
    // console.log(itemObj);
    setIsEditingQuantity((s) => !s);
    onUpdate(itemObj, qtyValue);
  }

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
            <p>
              <span style={{ marginRight: "4px" }}>
                Quantity:
                {isEditingQuantity ? (
                  <input
                    type="number"
                    style={{ width: "40px" }}
                    value={qtyValue}
                    onChange={(e) => setQtyValue(Number(e.target.value))}
                  />
                ) : (
                  quantity
                )}
              </span>
              <span>
                <button
                  style={{
                    border: "none",
                    backgroundColor: "#58c4dc",
                    padding: "4px 8px",
                    borderRadius: "15px",
                    cursor: "pointer",
                  }}
                  onClick={editProduct}
                >
                  {isEditingQuantity ? "Save" : "Edit QTY"}
                </button>
              </span>
            </p>
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
