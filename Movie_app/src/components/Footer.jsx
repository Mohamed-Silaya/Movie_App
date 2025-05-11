// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../assets/css/Footer.css'; 

const Footer = () => {
  return (
    
    <footer className="container">
      <div className="footer-content con">
        <p className="footer-text">
          © {new Date().getFullYear()} Movie App. All rights reserved.
        </p>
        <div className="footer-links">
       
          <Link to="/privacy" className="footer-link">
            Privacy Policy
          </Link>
          <Link to="/terms" className="footer-link">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;