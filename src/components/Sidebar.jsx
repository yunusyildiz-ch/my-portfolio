import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf, FaHome } from 'react-icons/fa';
import { MdPersonSearch, MdContactPhone } from 'react-icons/md';
import { PiProjectorScreenFill } from 'react-icons/pi';
import { TbFileCv } from 'react-icons/tb';

const Sidebar = () => {
  const handleCVDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'CV_YunusYildiz.pdf';
    link.click();
  };

  return (
    <div className="sidebar">
      <nav>
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
        <Link to="#" onClick={handleCVDownload}>
          <TbFileCv size={35} color="#f56e1a" />
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;