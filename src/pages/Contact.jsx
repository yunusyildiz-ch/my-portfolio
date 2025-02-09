import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(); // Use i18n translation

  return (
    <div className="contact-container">
      <h2>{t("contact.title")}</h2>
      <p>{t("contact.description")}</p>
      <div className="social-links">
        <a href="mailto:yunusyildiz@swissmail.com" className="contact-link">
          <FaEnvelope size={30} />
        </a>
        <a href="https://linkedin.com/in/yunusyildiz" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ color: "#0077b5" }} />
        </a>
        <a href="https://github.com/yunusyildiz-ch" className="contact-link" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ color: "#333" }} />
        </a>
        <a href="https://yunusyildiz.ch/" className="contact-link" target="_blank" rel="noopener noreferrer">
          <TbWorldWww size={35} style={{ color: "#f06209" }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;