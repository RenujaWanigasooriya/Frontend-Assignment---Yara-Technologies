import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
   <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/details">Details</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;
