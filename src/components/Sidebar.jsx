import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdPersonSearch, MdContactPhone } from 'react-icons/md';
import { PiProjectorScreenFill } from 'react-icons/pi';
import { TbFileCv } from 'react-icons/tb';
import Footer from './Footer';

const Sidebar = () => {
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = `${window.location.origin}/YunusYILDIZ-CV.pdf`;
    link.download = 'YunusYILDIZ-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/">
          <FaHome size={35} color="#f56e1a" />
        </Link>
        <Link to="/about">
          <MdPersonSearch size={35} color="#f56e1a" />
        </Link>
        <Link to="/projects">
          <PiProjectorScreenFill size={35} color="#f56e1a" />
        </Link>
        <Link to="/contact">
          <MdContactPhone size={30} color="#f56e1a" />
        </Link>
        <Link to="/cv.pdf" onClick={handleCVDownload}>
          <TbFileCv size={35} color="#f56e1a" />
        </Link>
      </nav>
      <Footer />
    </div>
  );
};

export default Sidebar;