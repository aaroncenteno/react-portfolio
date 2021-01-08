import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
    } = props;

    return (
        <header className="flex-row space-between px-1">
            <h2>
                <a data-testid="link" href="/">
                    <img className="logo-img" alt="ACenteno-Logo" src={require("../../assets/large/logo.jpg").default}/>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className="mx-2">
                        <a data-testid="portfolio" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact Me</span>
                    </li>
                    {/* <li className="mx-2">
                        <a data-testid="contact" href="#contact">
                            Contact Me
                        </a>
                    </li> */}
                    <li className="mx-2">
                        <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
                            Resumé
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;