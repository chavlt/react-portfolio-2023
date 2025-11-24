import '../styles/ProjectsList.scss'
import { ProjectsInfos } from '../datas/ProjectsInfos'
import ProjectItem from '../components/ProjectItem'
import React, { useEffect,useState } from "react";





// FILTERS


function ProjectsList(){
    // Get projects
    const [projects, setProjects] = useState([]);
    const [filters, setFilters] = useState(["tous"]);

    useEffect(() => {
        async function fetchProjects(){
            const url = "https://portfolio-backend--development.gadget.app/notion/pages?database_id=1ff5569098a980608935e3789d04f381"
            const res = await fetch(url);
            const data = await res.json();

            setProjects(data.results);


            // Get all existing filters
            const tagSet = new Set();

            data.results.forEach(project => {
                const tags = project.properties.tags?.multi_select || [];
                tags.forEach(tag => tagSet.add(tag.name));
            });

            const uniqueTags = Array.from(tagSet);
            setFilters(["tous", ...uniqueTags]);
        }

        fetchProjects();
    }, [])


    
    // Fonction pour gérer le clic sur un filtre
    const [selectedFilter, setSelectedFilter] = useState('tous');

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

    const getProjectsNumberForFilter = (filter) => {
        if (filter === 'tous') {
            return ProjectsInfos.length; // Le filtre "tous" montre tous les projets
        }
        return ProjectsInfos.filter((project) => project.tags.includes(filter)).length;
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
                        const tagList = project.properties.tags?.multi_select?.map(tag => tag.name) || [];
                        return selectedFilter === 'tous' || tagList.includes(selectedFilter);
                        })
                        .map((project, index) => (
                        <ProjectItem
                            key={index}
                            id={project.properties.handle.rich_text[0].text.content}
                            tags={project.properties.tags.multi_select[0].name}
                            image={project.properties.cover.files[0].file.url}
                            year={project.properties.year.number}
                            title={project.title}
                        />
                    ))}
            </div>
        </div>
    )

}

export default ProjectsList