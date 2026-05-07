import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <h2 className="navbar__logo">MediMart</h2>
        <p className="navbar__tag">Your online medical shop</p>
      </div>

      <nav className="navbar__links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>Medicines</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active cart-link" : "cart-link")}>
          Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;