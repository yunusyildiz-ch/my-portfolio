import React from 'react';
import ProjectCard from '../components/ProjectCard';

const myProjects = [
  {
    title: 'School Management System',
    description: 'A dynamic app with JS & REST API backend...',
    imageUrl: '/images/project-school.png',
    link: 'https://josephfox-schoolmanagementsystem.netlify.app',
    githubLink: 'https://github.com/yunusyildiz-ch/School-Management-System-Project.git',
  },
  {
    title: 'Heating System Optimization',
    description: 'Full stack project with Arduino integration...',
    imageUrl: '/images/project-smartfox.png',
    link: 'https://smartfoxhome.netlify.app',
    githubLink: 'https://github.com/yunusyildiz-ch/smartFOX_App.git',
  },
];

const Projects = () => {
  return (
    <div id="projects" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {myProjects.map((proj) => (
        <ProjectCard
          key={proj.title}
          title={proj.title}
          description={proj.description}
          imageUrl={proj.imageUrl}
          link={proj.link}
          githubLink={proj.githubLink}
        />
      ))}
    </div>
  );
};

export default Projects;