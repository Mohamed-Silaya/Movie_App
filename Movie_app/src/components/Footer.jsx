// Footer.jsx
import React from 'react';
import '../assets/css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Movie App. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;