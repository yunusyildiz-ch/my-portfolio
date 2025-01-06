import React from 'react';
import { FaCertificate, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiBootstrap, SiArduino, SiMysql } from 'react-icons/si';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About Me</h2>
      <p className="about-description">
        I am a passionate and dedicated full-stack developer with a strong foundation in web development. After
        completing comprehensive training at HiCoders IT Academy, I gained proficiency in building scalable and efficient web
        applications using modern technologies. I am constantly evolving my skills to deliver better solutions and make an impact
        through technology.
      </p>

      <h3 className="section-title">Education & Certifications</h3>
      <ul className="certifications-list">
        <li>
          <FaCertificate className="icon" />
          <strong>Certificate of Excellence</strong> – HiCoders IT Academy (2023)
        </li>
        <li>
          <FaCertificate className="icon" />
          <strong>Full-Stack Development Certificate</strong> – HiCoders IT Academy (2023)
        </li>
      </ul>

      <h3 className="section-title">Skills and Abilities Acquired</h3>
      <ul className="skills-list">
        <li>Mastery of Web Programming Basics</li>
        <li>Proficiency in Developing Middle-Sized Applications</li>
        <li>Expertise in Independently Building Applications Using HTML, CSS, and JavaScript</li>
        <li>Ability to Build and Deploy Full-Stack Applications Using React, Node.js, and MongoDB</li>
        <li>Understanding of CLI Basics, Git, and GitHub</li>
        <li>Strong Ability to Communicate and Articulate Programming Principles</li>
        <li>Basic Knowledge of Arduino Integration and IoT Applications</li>
      </ul>

      <h3 className="section-title">Technical Skills</h3>
      <div className="skills-grid">
        <div className="skill-item">
          <FaHtml5 size={30} style={{ color: '#e44d26' }} />
          <span>HTML5</span>
        </div>
        <div className="skill-item">
          <FaCss3Alt size={30} style={{ color: '#2965f1' }} />
          <span>CSS3</span>
        </div>
        <div className="skill-item">
          <FaJsSquare size={30} style={{ color: '#f7df1e' }} />
          <span>JavaScript</span>
        </div>
        <div className="skill-item">
          <FaReact size={30} style={{ color: '#61dafb' }} />
          <span>React</span>
        </div>
        <div className="skill-item">
          <FaNodeJs size={30} style={{ color: '#68a063' }} />
          <span>Node.js</span>
        </div>
        <div className="skill-item">
          <SiMongodb size={30} style={{ color: '#4db33d' }} />
          <span>MongoDB</span>
        </div>
        <div className="skill-item">
          <SiMysql size={30} style={{ color: '#00758f' }} />
          <span>MySQL</span>
        </div>
        <div className="skill-item">
          <FaGitAlt size={30} style={{ color: '#f1502f' }} />
          <span>Git</span>
        </div>
        <div className="skill-item">
          <SiBootstrap size={30} style={{ color: '#563d7c' }} />
          <span>Bootstrap</span>
        </div>
        <div className="skill-item">
          <SiArduino size={30} style={{ color: '#00979d' }} />
          <span>Arduino</span>
        </div>
      </div>

      <h3 className="section-title">Hobbies & Interests</h3>
      <p className="about-description">
        I enjoy playing chess, running, drinking coffee with my wife, and spending time improving my coding skills. I believe in continuous learning and am always curious to explore new technologies and tools to enhance my skill set.
      </p>
    </div>
  );
};

export default About;