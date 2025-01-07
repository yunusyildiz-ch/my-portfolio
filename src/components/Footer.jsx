import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="sidebar-footer">
      <ul className="footer-languages">
        <li><Link to="#">English(US)</Link></li>
        <li><Link to="#">Français</Link></li>
        <li><Link to="#">Deutsch</Link></li>
        <li><Link to="#">Italiano</Link></li>
        <li><Link to="#">日本語</Link></li>
        <li><Link to="#">Türkçe</Link></li>
        <li><Link to="#">Русский</Link></li>
      </ul>
      <p className="footer-copyright">Yunus YILDIZ &copy; 2025</p>
      <p className="footer-address">Genève</p>
    </footer>
  );
};

export default Footer;