import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import ShowCartItems from "./ShowCartItems";
import { NavLink } from "react-router-dom";

function Header({
  cartItems = [],
  query = "",
  setQuery = () => {},
  onDelete = () => {},
  onUpdate = () => {},
}) {
  return (
    <header>
      <div className="header-left">
        <Logo />
        <div className="location">
          <Icon icon={<FaLocationDot />} />
          <NavItem>
            <a href="" className="clean-links">
              <span>Deliver to</span>
              <h3>United States</h3>
            </a>
          </NavItem>
        </div>
      </div>
      <div className="header-middle">
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="header-right">
        <NavItem className="nav-item">
          <NavLink to="/login" className="clean-links">
            <span>Hello, Sign in</span>
            <h3>Accounts & Lists</h3>
          </NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink to="/" className="clean-links">
            <span>Returns</span>
            <h3>& Orders</h3>
          </NavLink>
        </NavItem>
        <div className="cart">
          <Icon
            icon={<FaShoppingCart />}
            cartItems={cartItems}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src="../../public/logo.png" alt="logo" />
      </NavLink>
    </div>
  );
}

export function Icon({
  icon = null,
  cartItems = null,
  onDelete = undefined,
  onUpdate = undefined,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <span style={{ cursor: "pointer" }} onClick={() => setIsOpen((s) => !s)}>
        {icon}
      </span>
      {isOpen && cartItems?.length > 0 && (
        <ShowCartItems
          cartItems={cartItems}
          setIsOpen={setIsOpen}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      )}
      {isOpen && cartItems?.length === 0 && (
        <div className="cart-container">
          <p
            style={{
              color: "black",
              fontSize: "14px",
              backgroundColor: "rgb(255, 206, 18)",
              padding: "10px 8px",
              borderRadius: "15px",
            }}
          >
            Your Amazon Cart is empty
          </p>
        </div>
      )}
    </>
  );
}

function NavItem({ children, className = null }) {
  return <div className={className}>{children}</div>;
}

function Search({ query, setQuery }) {
  return (
    <>
      <input
        type="text"
        placeholder="search for a unique product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button>
        <FaSearch />
      </button>
    </>
  );
}

export default Header;
