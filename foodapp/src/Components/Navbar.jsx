import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "../modal";
import Cart from "../Screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  let navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const loadCart = () => {
    setCartView(true);
  };

  const items = useCart();

  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          <span className="brand-text">🍽️ FoodWeb</span>
        </Link>

        <div className="navbar-menu">
          <Link className="nav-link" to="/">
            Home
          </Link>
          {localStorage.getItem("token") && (
            <Link className="nav-link" to="/myorder">
              My Orders
            </Link>
          )}
        </div>

        <div className="navbar-actions">
          {!localStorage.getItem("token") ? (
            <div className="auth-buttons">
              <Link className="btn-outline" to="/login">
                Login
              </Link>
              <Link className="btn-primary" to="/registerUser">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="user-actions">
              <button className="cart-button" onClick={loadCart}>
                <Badge color="secondary" badgeContent={items.length}>
                  <ShoppingCartIcon />
                </Badge>
                <span>Cart</span>
              </button>
              {cartView && (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              )}
              <button onClick={handleLogout} className="btn-outline">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
