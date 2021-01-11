import React from 'react';
import resumePdf from '../../assets/resume/AC_Resume08122020.pdf'

function Resume () {
    return (
        <section className='resume-section'>
			<div className='resume-container'>
				<h1>Resumé</h1>
				<p>
					Download my<span> </span>
					<a
						href={resumePdf}
                        target='_blank'
                        rel="noreferrer"
                        className="resume-download">
						Resumé
					</a>
				</p>
				<br />

				<h2>Front End</h2>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>React</li>
					<li>Bootstrap</li>
                    <li>Chart.js</li>
                    <li>Responsive Design</li>
				</ul>
				<br/>

				<h2>Back End</h2>
				<ul>
					<li>APIs</li>
					<li>Node</li>
					<li>Express</li>
					<li>MySQL, Sequelize</li>
					<li>MongoDB</li>
					<li>REST</li>
				</ul>
			</div>
		</section>
    )
}

export default Resume;