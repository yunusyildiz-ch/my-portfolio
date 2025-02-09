import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sidebar-footer">
      <ul className="footer-languages">
      <li>
          <Link to="#">English(US)</Link>
        </li>
        <li>
          <Link to="#">Français</Link>
        </li>
        <li>
          <Link to="#">Deutsch</Link>
        </li>
        <li>
          <Link to="#">Italiano</Link>
        </li>
      </ul>
      <div className="footer-texts">
        <p className="footer-copyright">Yunus YILDIZ &copy; 2025</p>
        <p className="footer-address">Genève</p>
      </div>
    </footer>
  );
};

export default Footer;
