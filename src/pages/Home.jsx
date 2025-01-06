import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="home-container text-center">
      <h1>Welcome, I'm Yunus Yıldız</h1>
      <p className="lead">Full-Stack Developer | Problem Solver | Continuous Learner</p>
      <img
        src="/images/profile.jpg"
        alt="Yunus Yıldız"
        className="rounded-circle my-4"
        style={{ width: '150px', height: '150px', border: '5px solid #ff5733' }}
      />
      <p>
        I am a passionate developer who loves to build smart, efficient, and scalable web applications.
        I believe in clean code, continuous learning, and the power of technology to make life better.
      </p>
      <div className="social-links mt-4">
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

export default Home;