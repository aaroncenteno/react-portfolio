import React from 'react';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
    return (
        <footer className= "flex-row space-between px-1">
            <ul>
                <li className="footer-item">
                    <a
                        className="footer-link"
                        href="https://github.com/aaroncenteno"
                        target="_blank"
                        rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li className="footer-item">
                    <a 
                        className="footer-link"
                        href="https://www.linkedin.com/in/aaron-centeno-a7a46b183/"
                        target="_blank"
                        rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li className="footer-item">
                    <a 
                        className="footer-link"
                        href="https://twitter.com/aaronsamuels88"
                        target="_blank"
                        rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter}/>
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;