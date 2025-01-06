import React from 'react';
import { TbWorldWww } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ imageUrl, title, description, link, githubLink }) => {
  return (
    <div className="card project-card m-3" style={{ width: '18rem' }}>
      <img src={imageUrl} className="card-img-top project-image" alt={title} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between mt-4">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-link btn-lg">
              <TbWorldWww size={35} />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-link btn-lg">
              <FaGithub size={35} style={{ color: '#000' }} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;