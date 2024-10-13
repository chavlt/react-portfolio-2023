import '../styles/ProjectsList.scss'
import { ProjectsInfos } from '../datas/ProjectsInfos'
import ProjectItem from '../components/ProjectItem'
import React, { useState } from "react";



// FILTERS
let filters = ["tous", "branding", "ui/ux", "illustration", "app mobile", "landing page"]


function ProjectsList(){
    const [selectedFilter, setSelectedFilter] = useState('tous');

    // Fonction pour gérer le clic sur un filtre
    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const getNombreProjetsPourFiltre = (filter) => {
        if (filter === 'tous') {
            return ProjectsInfos.length; // Le filtre "tous" montre tous les projets
        }
        return ProjectsInfos.filter((project) => project.tags.includes(filter)).length;
    };

    const filtresVisibles = filters.filter((filter) => getNombreProjetsPourFiltre(filter) > 0);



    return (
        <div className="projects-list">
            <div className="projects-list__filters filters">
                { filtresVisibles.map((filter, index) => (
                    <div className={`filters__item ${filter === selectedFilter ? "selected" : ""}`} onClick={() => handleFilterClick(filter)} key={index} data-tag={filter}>
                        <p className="filters__text">{filter}</p>
                    </div>
                ))}
            </div>

            <div className="projects-list__items projects-list">
                    {ProjectsInfos
                        .filter(project => selectedFilter === 'tous' || project.tags.includes(selectedFilter))
                        .map((project, index) =>(
                            <ProjectItem
                                key={index}
                                link={project.link}
                                tags={project.tags}
                                image={project.image}
                                year={project.year}
                                title={project.title}
                            />
                    ))}
            </div>
        </div>
    )

}

export default ProjectsList