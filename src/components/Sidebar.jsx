import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '/images/profile.jpg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={profileImage} alt="Profile" className="profile-pic" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <a href="/cv.pdf" download className="cv-download">Download CV</a>
    </div>
  );
};

export default Sidebar;