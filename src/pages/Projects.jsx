import React from 'react'
import ProjectCard from '../components/ProjectCard'

export const Projects = () => {
  const myProjects = [
    {
      title: 'School Management System',
      description: 'A dynamic app with JS & REST API backend...',
      imageUrl: '/images/project-school.png',
      link :'https://josephfox-schoolmanagementsystem.netlify.app',
      githublink: 'https://github.com/yunusyildiz-ch/School-Management-System-Project.git'
    },
    {
      title: 'Heating System Optimization',
      description: 'Full stack project with Arduino integration...',
      imageUrl: '/images/project-smartfox.png',
      link : 'https://smartfoxhome.netlify.app',
      githublink: 'https://github.com/yunusyildiz-ch/smartFOX_App.git'
    }
 
  ]
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {myProjects.map((proj) => (
        <ProjectCard 
          key={proj.title}
          title={proj.title}
          description={proj.description}
          imageUrl={proj.imageUrl}
          link={proj.link}
          githublink={proj.githublink}
        />
      ))}
    </div>
  )
}

export default Projects;