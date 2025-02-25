import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        <div className="logo-box">
          <a href="#">
            <img src={logo} alt="logo" className="logo" />
          </a>
        </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/login">Log in</a>
          </li>
          <li>
            <a href="/signup">Sign up</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
