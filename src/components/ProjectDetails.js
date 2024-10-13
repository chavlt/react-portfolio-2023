import { useParams } from 'react-router-dom';
import { ProjectsInfos } from '../datas/ProjectsInfos';

function ProjectDetails() {
  // Récupérer le paramètre dynamique dans l'URL
  const { projectId } = useParams();

  // Trouver le projet correspondant à l'ID
  const project = ProjectsInfos.find((proj) => proj.id === projectId);

  if (!project) {
    return <p>Projet non trouvé.</p>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      {/* Ajoute ici les autres détails du projet */}
    </div>
  );
}

export default ProjectDetails;