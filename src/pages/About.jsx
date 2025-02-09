import React from 'react';
import { useTranslation } from "react-i18next";
import { FaCertificate, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiBootstrap, SiArduino, SiMysql } from 'react-icons/si';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about-container">
      <h2 className="about-title">{t("about.title")}</h2>
      <p className="about-description">{t("about.description")}</p>

      <h3 className="section-title">{t("education.certifications")}</h3>
      <ul className="certifications-list">
        <li>
          <FaCertificate className="icon" />
          <strong>{t("education.certification1")}</strong>
        </li>
        <li>
          <FaCertificate className="icon" />
          <strong>{t("education.certification2")}</strong>
        </li>
      </ul>

      <h3 className="section-title">{t("skills.title")}</h3>
      <ul className="skills-list">
        <li>{t("skills.item1")}</li>
        <li>{t("skills.item2")}</li>
        <li>{t("skills.item3")}</li>
        <li>{t("skills.item4")}</li>
        <li>{t("skills.item5")}</li>
        <li>{t("skills.item6")}</li>
        <li>{t("skills.item7")}</li>
      </ul>

      <h3 className="section-title">{t("technicalSkills.title")}</h3>
      <div className="skills-grid">
        <div className="skill-item"><FaHtml5 size={30} style={{ color: '#e44d26' }} /><span>HTML5</span></div>
        <div className="skill-item"><FaCss3Alt size={30} style={{ color: '#2965f1' }} /><span>CSS3</span></div>
        <div className="skill-item"><FaJsSquare size={30} style={{ color: '#f7df1e' }} /><span>JavaScript</span></div>
        <div className="skill-item"><FaReact size={30} style={{ color: '#61dafb' }} /><span>React</span></div>
        <div className="skill-item"><FaNodeJs size={30} style={{ color: '#68a063' }} /><span>Node.js</span></div>
        <div className="skill-item"><SiMongodb size={30} style={{ color: '#4db33d' }} /><span>MongoDB</span></div>
        <div className="skill-item"><SiMysql size={30} style={{ color: '#00758f' }} /><span>MySQL</span></div>
        <div className="skill-item"><FaGitAlt size={30} style={{ color: '#f1502f' }} /><span>Git</span></div>
        <div className="skill-item"><SiBootstrap size={30} style={{ color: '#563d7c' }} /><span>Bootstrap</span></div>
        <div className="skill-item"><SiArduino size={30} style={{ color: '#00979d' }} /><span>Arduino</span></div>
      </div>

      <h3 className="section-title">{t("hobbies.title")}</h3>
      <p className="about-description">{t("hobbies.description")}</p>
    </div>
  );
};

export default About;