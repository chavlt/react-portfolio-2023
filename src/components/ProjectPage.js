import { useParams } from 'react-router-dom';
import { ProjectsInfos } from '../datas/ProjectsInfos';
import '../styles/ProjectPage.scss';

function ProjectPage() {
  // Récupérer le paramètre dynamique dans l'URL
  const { projectId } = useParams();

  // Trouver le projet correspondant à l'ID
  const project = ProjectsInfos.find((proj) => proj.id === projectId);

  if (!project) {
    return <p>Projet non trouvé.</p>;
  }

  return (
    <div className="project-page">
      <div className="project-page__banner">
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-page__text container">
        <div className="project-page__highlight-text">
          <p>{project.description}</p>
        </div>
        {/* Ajoute ici les autres détails du projet */}
      </div>
    </div>
  );
}

export default ProjectPage;