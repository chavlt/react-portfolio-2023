import '../styles/ProjectsList.scss'
import { ProjectsInfos } from '../datas/ProjectsInfos'
//import React, { useState } from 'react';
import ProjectItem from '../components/ProjectItem'



// FILTERS
let filters = [
    {
        "filter": "tous"
    },
    {
        "filter": "branding"
    },
    {
        "filter": "ux"
    },
    {
        "filter": "illustration"
    }
]

let filtersItems = document.querySelectorAll('.filters__item');

filtersItems.forEach((filter) => {
    filter.addEventListener('click', () => {
        let activeFilter = document.querySelector('.filters__item.selected');
        activeFilter.classList.remove('selected');
        filter.classList.add('selected');
    })
})


function ProjectsList(){
    //const [cat, setCat] = useState("tous");
    
    return (
        <div className="projects-list">
            <div className="projects-list__filters filters">
                { filters.map(({filter}, index) => (
                    <div className={`filters__item ${filter === "tous" ? "selected" : ""}`} key={index} data-tag={filter}>
                        <p className="filters__text">{filter}</p>
                    </div>
                ))}
            </div>

            <div className="projects-list__items projects-list">
                    {ProjectsInfos.map((project, index) =>(
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