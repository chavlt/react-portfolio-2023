import TitleWithText from '../components/TitleWithText'
import ProjectsList from '../components/ProjectsList'
import '../styles/Projects.scss'

function Projects(){
    return (
        <div className="projects">
            <TitleWithText />
            <ProjectsList />
        </div>
    )
}

export default Projects