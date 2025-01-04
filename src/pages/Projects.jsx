import React from 'react'
import ProjectCard from '../components/ProjectCard'

export const Projects = () => {
  const myProjects = [
    {
      title: 'School Management System',
      description: 'A dynamic app with JS & REST API backend...',
      imageUrl: '/images/school-project.png',
      link: 'https://github.com/...'
    },
    {
      title: 'Heating System Optimization',
      description: 'Full stack project with Arduino integration...',
      imageUrl: '/images/heating-system.png',
      link: 'https://github.com/...'
    }
    // ve benzeri...
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
        />
      ))}
    </div>
  )
}

export default Projects;