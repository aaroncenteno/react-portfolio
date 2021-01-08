import React from 'react';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const { pages = [], currentPage, setCurrentPage} = props;

    return (
        <header className="flex-row space-between px-1">
            <h2>
                <a data-testid="link" href="/">
                    <img className="logo-img" alt="ACenteno-Logo" src={require("../../assets/large/logo.jpg").default}/>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`${currentPage === 'about' && 'nav-active'}`}>
                        <span
                        onClick={()=> setCurrentPage('about')}>
                            <a href="#about">About Me</a>
                        </span>
                    </li>
                    <li className={`${currentPage === 'portfolio' && 'nav-active'}`}>
                        <span
                        onClick={()=> setCurrentPage('portfolio')}>
                            <a href="#portfolio">Portfolio</a>
                        </span>
                    </li>
                    <li className={`${currentPage === 'contact' && 'nav-active'}`}>
                        <span
                        onClick={()=> setCurrentPage('contact')}>
                            <a href="#contact">Contact Me</a>
                        </span>
                    </li>
                    <li className={`${currentPage === 'resume' && 'nav-active'}`}>
                        <span
                        onClick={()=> setCurrentPage('resume')}>
                            <a href="#resume">Resumé</a>
                        </span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;