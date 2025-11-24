import { useParams } from 'react-router-dom';
import ProjectPage from '../components/ProjectPage';

function Project() {
  const { id } = useParams(); // récupère l'id depuis l'URL

  return (
    <div className="project">
      <ProjectPage projectId={id} />  {/* on passe l'id en props */}
    </div>
  );
}

export default Project;