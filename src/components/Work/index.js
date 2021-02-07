import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Work (props) {
    const { name, projectImage, liveLink, repoLink } = props;

    return (
        <div id="works" href={liveLink} target="_blank" className="work-container">
            <img src={projectImage} className="project-img" alt={name}></img>
            <div className="link-container">
                <div className="links">
                    <a
                        href={liveLink}
                        target='_blank'
                        className='project-name'
                        rel="noreferrer">
                        {name}
                        </a>
                        <a href={repoLink} target='_blank' rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} className="github-icon"/>
                        </a>
                </div>
            </div>
        </div>
    );
}

export default Work;