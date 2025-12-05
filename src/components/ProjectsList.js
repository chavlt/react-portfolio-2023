import '../styles/ProjectsList.scss'
import ProjectItem from '../components/ProjectItem'
import React, { useEffect,useState } from "react";
import { fetchProjects } from "../api/hygraph";




// FILTERS


function ProjectsList(){
    // Get projects
    const [projects, setProjects] = useState([]);
    const [filters, setFilters] = useState(["tous"]);


useEffect(() => {
    fetchProjects().then(projects => {
        // Mettre à jour les projets
        setProjects(projects);

        // Générer les filtres uniques à partir des projets récupérés
        const tagSet = new Set();
        projects.forEach(project => {
            //[EDIT] Avant : const tags = project.tags?.multi_select || [];
            const tags = project.tags ? project.tags.split(";").map(tag => tag.trim()) : []; // maintenant project.tags est une chaîne
            tags.forEach(tag => tagSet.add(tag));
        });

        const uniqueTags = Array.from(tagSet);
        setFilters(["tous", ...uniqueTags]);
    });
}, []);




    // Fonction pour gérer le clic sur un filtre
    const [selectedFilter, setSelectedFilter] = useState('tous');

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };


    const getProjectsNumberForFilter = (filter) => {
    if (filter === 'tous') {
        return projects.length; // [EDIT] Avant : ProjectsInfos.length
    }
    return projects.filter((project) => {
        //[EDIT] Avant : project.tags.includes(filter)
        const tags = project.tags ? project.tags.split(",").map(tag => tag.trim()) : [];
        return tags.includes(filter);
    }).length;
};


    const filtresVisibles = filters.filter((filter) => getProjectsNumberForFilter(filter) > 0);



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
                {projects && projects.length > 0 && 
                    projects
                        .filter(project => {
                            //[EDIT] Avant : const tagList = project.tags?.multi_select?.map(tag => tag.name) || [];
                            const tagList = project.tags ? project.tags.split(",").map(tag => tag.trim()) : [];
                            return selectedFilter === 'tous' || tagList.includes(selectedFilter);
                        })
                        .map((p, id) => (
                        <ProjectItem
                            key={p.id}
                            id={p.slug}
                            tags={p.tags} // [EDIT] Ici tu peux laisser la chaîne ou convertir en tableau si ProjectItem attend un tableau
                            image=""
                            year={p.date}
                            title={p.title}
                        />
                    ))}
            </div>

        </div>
    )

}

export default ProjectsList