import React, { useState } from "react";
import { Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Modal from "../modal";
import Cart from "../Screens/Cart";
import { useCart } from "./ContextReducer";

import "../CSS//Navbar.css"; // Import a separate CSS file

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
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky">
        <div className="container">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            FoodWeb
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {localStorage.getItem("token") && (
                <li className="nav-item">
                  <Link className="nav-link fs-5 mx-3" to="/myorder">
                    My Orders
                  </Link>
                </li>
              )}
            </ul>
            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link className="btn btn-light text-success mx-1" to="/login">
                  Login
                </Link>
                <Link
                  className="btn btn-light text-success mx-1"
                  to="/registerUser"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <div className="d-flex align-items-center">
                <div
                  className="btn bg-white text-success mx-2"
                  onClick={loadCart}
                >
                  <Badge color="secondary" badgeContent={items.length}>
                    <ShoppingCartIcon />
                  </Badge>
                  {"  "}
                  Cart
                </div>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}

                <button
                  onClick={handleLogout}
                  className="btn bg-white text-success"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
