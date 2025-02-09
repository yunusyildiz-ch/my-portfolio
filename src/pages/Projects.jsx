import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const { t } = useTranslation(); // Use i18n translation

  const myProjects = [
    {
      title: t("projects.school.title"),
      description: t("projects.school.description"),
      imageUrl: "/images/project-school.png",
      link: "https://josephfox-schoolmanagementsystem.netlify.app",
      githubLink:
        "https://github.com/yunusyildiz-ch/School-Management-System-Project.git",
      features: [
        t("projects.school.features.0"),
        t("projects.school.features.1"),
        t("projects.school.features.2"),
        t("projects.school.features.3"),
      ],
    },
    {
      title: t("projects.api.title"),
      description: t("projects.api.description"),
      imageUrl: "/images/project-school.png",
      link: "https://school-management-system-rest-api.vercel.app",
      githubLink:
        "https://github.com/yunusyildiz-ch/School-Management-System-REST-API.git",
      features: [
        t("projects.api.features.0"),
        t("projects.api.features.1"),
        t("projects.api.features.2"),
        t("projects.api.features.3"),
      ],
      isDisabled: true,
    },
    {
      title: t("projects.smartfox.title"),
      description: t("projects.smartfox.description"),
      imageUrl: "/images/project-smartfox.png",
      link: "https://smartfoxhome.netlify.app",
      githubLink: "https://github.com/yunusyildiz-ch/smartFOX_App.git",
      features: [
        t("projects.smartfox.features.0"),
        t("projects.smartfox.features.1"),
        t("projects.smartfox.features.2"),
        t("projects.smartfox.features.3"),
        t("projects.smartfox.features.4"),
        t("projects.smartfox.features.5"),
        t("projects.smartfox.features.6"),
      ],
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="my-projects-title">{t("projects.title")}</h2>
      <p className="my-projects-subtitle">{t("projects.subtitle")}</p>
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
