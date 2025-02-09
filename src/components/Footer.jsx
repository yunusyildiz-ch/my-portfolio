import React from "react";
import { useTranslation } from "react-i18next";

// Import flag images from src/assets folder
import deFlag from "../assets/de.png";
import enFlag from "../assets/en.png";
import frFlag from "../assets/fr.png";

const Footer = () => {
  const { t, i18n } = useTranslation(); // Initialize i18next for translations

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() => {
      console.log(`Language changed to: ${lng}`);
    }).catch((err) => {
      console.error("Error changing language:", err);
    });
  };

  return (
    <footer className="sidebar-footer">
      <ul className="footer-languages">
        <li>
          <button onClick={() => changeLanguage("en")} className="language-button">
            <img src={enFlag} alt="English" className="language-flag" /> EN
          </button>
        </li>
        <li>
          <button onClick={() => changeLanguage("fr")} className="language-button">
            <img src={frFlag} alt="Français" className="language-flag" /> FR
          </button>
        </li>
        <li>
          <button onClick={() => changeLanguage("de")} className="language-button">
            <img src={deFlag} alt="Deutsch" className="language-flag" /> DE
          </button>
        </li>
      </ul>
      <div className="footer-texts">
        <p className="footer-copyright">Yunus YILDIZ © 2025</p>
        <p className="footer-address">{t("footer.address")}</p>
      </div>
    </footer>
  );
};

export default Footer;


