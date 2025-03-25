import { FaLocationDot } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Header({ cartItems, query, setQuery }) {
  return (
    <header>
      <div className="header-left">
        <Logo />
        <div className="location">
          <Icon icon={<FaLocationDot />} />
          <NavItem>
            <span>Deliver to</span>
            <h3>United States</h3>
          </NavItem>
        </div>
      </div>
      <div className="header-middle">
        <Search query={query} setQuery={setQuery} />
      </div>
      <div className="header-right">
        <NavItem className="nav-item">
          <span>Hello, Sign in</span>
          <h3>Accounts & Lists</h3>
        </NavItem>
        <NavItem className="nav-item">
          <span>Returns</span>
          <h3>& Orders</h3>
        </NavItem>
        <div className="cart">
          <Icon icon={<FaShoppingCart />} />
          <span className="cart-count">{cartItems.length}</span>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <a href="#">
        <img src="/public/logo.png" alt="" />
      </a>
    </div>
  );
}

export function Icon({ icon = null }) {
  return <span style={{ cursor: "pointer" }}>{icon}</span>;
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
        <Icon icon={<FaSearch />} />
      </button>
    </>
  );
}

export default Header;
