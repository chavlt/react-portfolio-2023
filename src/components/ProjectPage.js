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

  const projectDate = new Date(project.date).getFullYear();
  const projectTags = project.tags;

  const projectTagsArray =
  typeof projectTags === "string"
    ? projectTags.split(";").map(t => t.trim()).filter(Boolean)
    : projectTags ?? [];


  return (
    <div className="project-page" data-project-title={project.title}>
      <div className="project-page__banner">
        <div className="project-page__banner-text-container">
          <h1>{project.title || "Sans titre"}</h1>
          {project.subtitle && <h2>{project.subtitle}</h2>}

          <div className="project-page__banner-wrapper container">
            <p className="project-page__banner-date">{projectDate}</p>
            <div className="project-page__banner-tags">
              {projectTagsArray.map((tag, index) => (
                <p className="tag" key={index}>{tag}</p>
              ))}
              </div>
          </div>
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

      <div className="project-page__text container container-small">
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