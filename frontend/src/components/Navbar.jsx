import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // You can create a separate CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          CarDekho
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/models" className="nav-links">
              Models
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/brands" className="nav-links">
              Brands
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links">
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
