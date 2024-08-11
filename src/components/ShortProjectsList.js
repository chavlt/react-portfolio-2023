import '../styles/ShortProjectsList.scss'
import Title from './Title'
import Link from './Link'
import ProjectItem from '../components/ProjectItem'
import { ProjectsInfos } from '../datas/ProjectsInfos'
import arrow from '../assets/purple-arrow.svg'



function ShortProjectsList(){
    return(
        <div className="short-projects-list container">
            <div className="short-projects-list__header">
                <Title>Derniers projets</Title>
                <Link link="/projects" text="Voir tous les projets"></Link>
            </div>


            <div className="short-projects-list__list">
                {ProjectsInfos.slice(0, 5).map((project, index) =>(
                    <ProjectItem
                        key={index}
                        link={project.link}
                        tags={project.tags}
                        image={project.image}
                        year={project.year}
                        title={project.title}
                    />
                ))}

                <a href="/projects" className="short-projects-list__show-more">
                    <p className="project__title">+ de projets</p>
                    <img className="project__arrow" src={arrow} alt="arrow"></img>
                </a>
            </div>
        </div>
    )
}

export default ShortProjectsList