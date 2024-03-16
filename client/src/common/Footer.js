import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>About Me</h5>
            <p>Add a brief description about yourself here. You can include information about your skills, experiences, and interests.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/certifications">Certificates</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Connect with Me</h5>
            <ul className="list-unstyled">
              <li><a href="https://www.linkedin.com/in/pugazhenthi-s-091684241/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/pugalkmc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p></p>
            </div>
            <div className="col-md-6">
              <p className="text-md-end">Designed by Pugazhenthi S</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
