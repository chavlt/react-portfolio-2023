import '../styles/ShortProjectsList.scss'
import Title from './Title'
import Link from './Link'
import ProjectItem from '../components/ProjectItem'
import { useEffect, useState } from "react"
import { fetchProjects } from "../api/hygraph";





function ShortProjectsList(){

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects().then(setProjects);
    }, []);

    
    return(
        <div className="short-projects-list container">

            <div className="short-projects-list__header">
                <Title>Derniers projets</Title>
                <Link link="/projects" text="Voir tous les projets"></Link>
            </div>


            <div className="short-projects-list__list">
                {projects && projects.length > 0 && projects.slice(0, 5).map((p, id) => (
                    <ProjectItem 
                        key={p.id}
                        id={p.slug}
                        tags={p.tags}
                        image=""
                        year={p.date}
                        title={p.title}
                    />
                ))}

                <a href="/projects" className="short-projects-list__show-more">
                    <p className="project__title">+ de projets</p>
                    <svg className="project__arrow" width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 15.134C0.0217074 15.4101 -0.142168 16.0217 0.133975 16.5C0.410117 16.9783 1.02171 17.1422 1.5 16.866L0.5 15.134ZM23.6166 3.75882C23.7595 3.22535 23.4429 2.67702 22.9095 2.53407L14.2161 0.204703C13.6827 0.061761 13.1343 0.378344 12.9914 0.91181C12.8484 1.44528 13.165 1.99361 13.6985 2.13655L21.4259 4.20711L19.3553 11.9345C19.2124 12.468 19.529 13.0163 20.0624 13.1593C20.5959 13.3022 21.1442 12.9856 21.2872 12.4522L23.6166 3.75882ZM1.5 16.866L23.1506 4.36603L22.1506 2.63397L0.5 15.134L1.5 16.866Z" fill="currentColor"/>
                    </svg>

                </a>
            </div>
        </div>
    )
}

export default ShortProjectsList