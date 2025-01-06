import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container text-center">
      <h2>Contact Me</h2>
      <p>You can reach me via email or connect with me on LinkedIn and GitHub.</p>
      <div className="social-links mt-4">
        <a href="mailto:yunusyildiz@example.com" className="contact-link">
          <FaEnvelope size={25} style={{ marginRight: '10px' }} /> yunusyildiz@swissmail.com
        </a>
        <br />
        <a href="https://linkedin.com/in/yunusyildiz" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ color: '#0077b5', marginRight: '20px' }} />
        </a>
        <a href="https://github.com/yunusyildiz-ch" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ color: '#333' }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;