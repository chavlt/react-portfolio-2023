import '../styles/ProjectPage.scss';
import { useEffect, useState } from "react";

function ProjectPage({ projectId }) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      try {
        // 👉 On appelle la nouvelle route Gadget par handle
        const url = `https://portfolio-backend--development.gadget.app/notion/page/handle/${projectId}`;
        const res = await fetch(url);
        const data = await res.json();

        setProject(data);
      } catch (err) {
        console.error("Erreur lors du fetch du projet :", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [projectId]);

  if (loading) return <p>Chargement...</p>;
  if (!project) return <p>Projet non trouvé.</p>;

  return (
    <div className="project-page">
      <div className="project-page__banner">
        <h1>{project.properties?.Name?.title?.[0]?.plain_text || "Sans titre"}</h1>
        <div className="project-page__overlay"></div>
        {project.properties?.cover?.files?.[0]?.file?.url && (
          <img
            src={project.properties.cover.files[0].file.url}
            alt={project.properties?.Name?.title?.[0]?.plain_text || "cover"}
          />
        )}
      </div>

      <div className="project-page__text container">
        <div className="project-page__highlight-text">
          <p>{project.content?.plain_text}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;