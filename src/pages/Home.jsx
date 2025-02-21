import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TbWorldWww } from "react-icons/tb";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation(); // Use i18n translation

  return (
    <div className="home-container text-center">
      <h1>{t("home.welcome")}</h1>
      <p className="lead">{t("home.subtitle")}</p>
      <img
        src="/images/profile.png"
        alt="Yunus YILDIZ"
        className="rounded-circle my-4"
        style={{ width: "250px", height: "250px", border: "3px solid #ff5733" }}
      />
      <p>{t("home.description")}</p>
      <div className="social-links mt-4">
        <a
          href="https://www.linkedin.com/in/yunusyildiz-ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} style={{ color: "#0077b5", marginRight: "20px" }} />
        </a>
        <a
          href="https://github.com/yunusyildiz-ch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} style={{ color: "#333", marginRight: "20px" }} />
        </a>
        <a
          href="https://yunusyildiz.ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbWorldWww size={35} style={{ color: "#f06209" }} />
        </a>
      </div>
    </div>
  );
};

export default Home;