import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        🍽️ DOnut
      </div>

      <ul className="nav-links">
     <Link to="/home"><li>Home</li></Link> 
      <Link to="/categories"><li>Categories</li> </Link>  
       <Link to="/Recipe"><li>Recipes</li> </Link>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navbar;