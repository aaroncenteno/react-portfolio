import React, { useEffect } from 'react';
import headShot from '../../assets/headshot/AC.jpg'

function About () {
    return (
        <div id="aboutMe">
            <h2 className="section-title">
               Aaron Centeno
            </h2>
            <img
                src={headShot}
                alt='ACenteno Headshot'
                className= 'headshot'
            />
            <div className="section-bio">
                <p>
                    I attended the school of Theater, Film and Television at UCLA 
                    and obtained my bachelor's degree in 2019. My focused track was
                    sound design for live theater. While at UCLA I designed and and assisted on multiple
                    main stage shows. Post graduation I have worked as a freelance audio
                    engineer for theaters such as Geffen Playhouse and South Coast Repertory.
                    I am currently learning the practice of coding and web development through Trilogy Eduction
                    Services.
                </p>
            </div>
        </div>
    )
}

export default About;