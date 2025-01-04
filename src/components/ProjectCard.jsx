import React from "react";

const ProjectCard = () => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <img src={imageUrl} alt={title} style={{ width: "100%" }} />
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link}>View Project</a>}
    </div>
  );
};

export default ProjectCard;