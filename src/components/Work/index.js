import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Work (props) {
    const { name, projectImage, liveLink, repoLink } = props;

    return (
        <div id="work">
            <img src={projectImage} className="project-img"></img>
            <div className="image-container">
                <h1>
                    <a
                        href={liveLink}
                        target='_blank'
                        className='project-name'>
                        {name}
                        </a>
                        <a href={repoLink} target='_blank'>
                            <FontAwesomeIcon icon={faGithub}/>
                        </a>
                </h1>
            </div>
        </div>
    );
}

export default Work;