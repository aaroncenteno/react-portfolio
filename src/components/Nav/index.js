import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav() {
    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <img className="logo-img" alt="ACenteno-Logo" src={require("../../assets/large/logo.jpg").default}/>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="portfolio" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="contact" href="#contact">
                            Contact Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="resume" href="#resume">
                            Resumé
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;