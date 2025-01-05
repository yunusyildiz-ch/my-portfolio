import React from 'react';

const ProjectCard = ({ imageUrl, title, description, link, githubLink }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      )}
    </div>
  );
};

export default ProjectCard;