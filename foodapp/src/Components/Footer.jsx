import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <Link
          to="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          FoodWeb
        </Link>
        <span className="text-muted">© 2024 FoodWeb, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <Link to="/about" className="text-muted">
            About Us
          </Link>
        </li>
        <li className="ms-3">
          <Link to="/contact" className="text-muted">
            Contact
          </Link>
        </li>
        <li className="ms-3">
          <Link to="/terms" className="text-muted">
            Terms of Service
          </Link>
        </li>
        <li className="ms-3">
          <Link to="/privacy" className="text-muted">
            Privacy Policy
          </Link>
        </li>
      </ul>

      <div className="col-md-4 d-flex justify-content-end">
        <a
          href="https://www.facebook.com/undertakerbestwrestler.55/"
          target="_blank"
          rel="noopener noreferrer"
          className="me-4 text-muted"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="me-4 text-muted"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="text-muted"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}
