import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectItem.scss'; // Assurez-vous d'importer le fichier CSS
import arrow from '../assets/white-arrow.svg'


const ProjectItem = ({ link, tags, image, year, title }) => {
  return (
    <a className="projects-list__item project" href={link} data-tags={tags}>
      <div className="project__overlay"></div>
      <img className="project__image" src={image} alt={title}></img>
      <p className="project__year">{year}</p>
      <div className="project__infos">
        {Array.isArray(tags) ? (
          <div className="project__tags">
            {tags.map((tag, index) => (
              <div className="projects__tag tag" key={index}>{tag}</div>
            ))}
          </div>
        ) : (
          <div className="project__tags tag">{tags}</div>
        )}
        <div className="project__title-container">
          <h3 className="project__title">{title}</h3>
          <img className="project__arrow" src={arrow} alt="arrow"></img>
        </div>
      </div>
    </a>
  );
};

ProjectItem.propTypes = {
  link: PropTypes.string.isRequired,
  tags: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
  image: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  arrow: PropTypes.string.isRequired,
};

export default ProjectItem