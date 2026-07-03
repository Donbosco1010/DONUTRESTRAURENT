import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        🍽️ DOnuT
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">Recipes</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;