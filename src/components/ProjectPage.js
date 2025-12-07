import { fetchProjectById } from '../api/hygraph';
import '../styles/ProjectPage.scss';
import { useEffect, useState } from "react";

function ProjectPage({ projectId }) {
  //const [loading, setLoading] = useState(true);
  const [project, setProject] = useState([]);

  
  useEffect(() => {
    // Get the page slug
    const currentUrl = window.location.href;
    const projectSlug = currentUrl.split('projects/')[1];

    fetchProjectById(projectSlug).then(setProject);
  }, []);

  //if (loading) return <p>Chargement...</p>;
  if (!project) return <p>Projet non trouvé.</p>;

  return (
    <div className="project-page">
      <div className="project-page__banner">
        <div className="project-page__banner-text-container">
          <h1>{project.title || "Sans titre"}</h1>
          {project.subtitle && <h2>{project.subtitle}</h2>}
        </div>
        
        <div className="project-page__overlay"></div>
        {project.bannerImage?.url? (
          <img
            src={project.bannerImage?.url}
            alt={project.title || "cover"}
          />
        ):(
          <div className="project-page__banner--empty"></div>
        )}
      </div>

      <div className="project-page__text container">
        {/* Affichage du contenu du projet */}
        {project.content?.html && (
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: project.content.html }}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectPage;