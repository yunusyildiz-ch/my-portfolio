import React from 'react';
import ProjectCard from '../components/ProjectCard';

const myProjects = [
  {
    title: 'School Management System',
    description: 'An interactive web app for managing students, teachers, and classes.',
    imageUrl: '/images/project-school.png',
    link: 'https://josephfox-schoolmanagementsystem.netlify.app',
    githubLink: 'https://github.com/yunusyildiz-ch/School-Management-System-Project.git',
    features: [
      'Data management for students, classes, and teachers',
      'CSS3+, HTML5+, ES6+ supported',
      'LocalStorage for data persistence',
      'Responsive and modern UI'
    ],
  },
  {
    title: 'School Management System REST API',
    description: 'A comprehensive backend API for school management with Node.js, Express, and MySQL.',
    imageUrl: '/images/project-school.png',
    link: 'https://school-management-system-rest-api.vercel.app',
    githubLink: 'https://github.com/yunusyildiz-ch/School-Management-System-REST-API.git',
    features: [
      'JWT Authentication with Passport.js',
      'Role-based access control (Admin, Teacher, Student)',
      'Automated email notifications via Nodemailer',
      'Scheduled reminders using node-cron'
    ],
    isDisabled: true, 
  },
  {
    title: 'Heating System Optimization',
    description: 'A smart home project with Arduino integration to optimize heating systems.',
    imageUrl: '/images/project-smartfox.png',
    link: 'https://smartfoxhome.netlify.app',
    githubLink: 'https://github.com/yunusyildiz-ch/smartFOX_App.git',
    features: [
      'Comprehensive smart home management system',
      'Arduino integration for real-time climate control',
      'Intelligent climate optimization using advanced algorithms',
      'Efficient lighting and energy management',
      'Personalized user experience based on preferences',
      'Energy efficiency insights to reduce consumption by 20%',
      'Secure authentication and role-based access control'
    ],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="d-flex flex-column align-items-center">
      <h2 className="my-projects-title">My Projects</h2>
      <p className="my-projects-subtitle">
        Here are some of the projects I have worked on, showcasing my skills in web development, backend APIs, and smart home systems.
      </p>
      <div className="d-flex flex-wrap justify-content-center">
        {myProjects.map((proj) => (
          <ProjectCard
            key={proj.title}
            title={proj.title}
            description={proj.description}
            imageUrl={proj.imageUrl}
            link={proj.link}
            githubLink={proj.githubLink}
            features={proj.features}
            isDisabled={proj.isDisabled || false}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;