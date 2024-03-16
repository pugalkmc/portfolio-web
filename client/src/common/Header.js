import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your custom CSS file for header styles

const Header = () => {
  return (
    <div className="container-fluid px-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="nav-item">
              <Link to="/about-me" className="nav-link">
                About me
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/certifications" className="nav-link">
                Certificates
              </Link>
            </div>
          </div>
          <div className="navbar-nav">
            <div className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
