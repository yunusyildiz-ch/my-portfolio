import React from 'react';
import { TbWorldWww } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { BiListCheck } from 'react-icons/bi';

const ProjectCard = ({ imageUrl, title, description, link, githubLink, features, isDisabled }) => {
  return (
    <div className="card project-card shadow-sm m-4">
      <img src={imageUrl} className="card-img-top project-image" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text">{description}</p>
        {features && (
          <ul className="project-features list-unstyled">
            {features.map((feature, index) => (
              <li key={index}>
                <BiListCheck size={18} color="#f56e1a" /> {feature}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto d-flex justify-content-between">
          {link && (
            <a
              href={isDisabled ? '#' : link} 
              className={`btn btn-outline-primary ${isDisabled ? 'disabled' : ''}`}
              target={isDisabled ? '_self' : '_blank'}
              rel="noopener noreferrer"
              onClick={(e) => isDisabled && e.preventDefault()} 
            >
              <TbWorldWww size={30} />
            </a>
          )}
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              <FaGithub size={30} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;