import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf } from 'react-icons/fa';
import profileImage from '/images/profile.png';

const Sidebar = () => {
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_YunusYildiz.pdf';
    link.click();
  };

  return (
    <div className="sidebar">
      <img src={profileImage} alt="Profile" className="profile-pic" />
      <nav>
        <Link to="/">home</Link>
        <Link to="/about">about me</Link>
        <Link to="/projects">my projects</Link>
        <Link to="/contact">contact</Link>
      </nav>
      <div
        className="cv-download"
        onClick={handleCVDownload}
        style={{ cursor: 'pointer' }}
      >
        <FaFilePdf size={30} className="cv-icon" /> CV
      </div>
    </div>
  );
};

export default Sidebar;