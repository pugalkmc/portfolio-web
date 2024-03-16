import React from 'react';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container">
      <h2 className="text-center mb-4">Contact Me</h2>
      <div className="row">
        <div className="col-md-6">
          <h5>My Socials</h5>
          <ul className="list-unstyled">
            <li><FaLinkedin className="social-icon" /><a href="https://www.linkedin.com/in/pugazhenthi-s-091684241/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><FaGithub className="social-icon" /><a href="https://github.com/pugalkmc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><FaCode className="social-icon" /><a href="https://leetcode.com/21ecb13" target="_blank" rel="noopener noreferrer">LeetCode</a></li>
          </ul>
        </div>
        <div className="col-md-6">
          <h5>Get in Touch</h5>
          <p>Email: pugalkmc@gmail.com</p>
          <p>Phone: +91 9344776097</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
