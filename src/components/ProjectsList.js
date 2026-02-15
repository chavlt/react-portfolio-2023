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
            // Update projects
            setProjects(projects);

            // Create filters depending on the existing projects.
            const tagSet = new Set();
            projects.forEach(project => {
                const tags = project.tags ? project.tags.split(";").map(tag => tag.trim().toLowerCase()) : [];
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



    return (
        <div className="projects-list">
            <div className="projects-list__filters filters">
                { filters.map((filter, index) => (
                    <div className={`filters__item ${filter === selectedFilter ? "selected" : ""}`} onClick={() => handleFilterClick(filter)} key={index} data-tag={filter}>
                        <p className="filters__text">{filter}</p>
                    </div>
                ))}
            </div>

            <div className="projects-list__items projects-list">
                {projects && projects.length > 0 &&
                    [...projects]
                        .sort((a, b) => new Date(b.date) - new Date(a.date))
                        .filter(project => {
                            const tagList = project.tags
                                ? project.tags.split(";").map(tag => tag.trim().toLowerCase())
                                : [];
                            return selectedFilter === 'tous' || tagList.includes(selectedFilter);
                        })
                        .map((p) => (
                            <ProjectItem
                                key={p.id}
                                id={p.slug}
                                tags={p.tags}
                                image={p.coverImage?.url}
                                year={p.date}
                                title={p.title}
                            />
                        ))
                }
            </div>

        </div>
    )

}

export default ProjectsList