import React from 'react';
import Work from '../Work';
import covidCa from '../../assets/small/covid.jpg'
import fitnessPal from '../../assets/small/fitness-pal-screenshot.jpg'
import weatherDash from '../../assets/small/weather-dashboard.jpg'
import codingQuiz from '../../assets/small/coding-quiz.jpg'
import wanderPro from '../../assets/small/wanderPro.png'
import techBlog from '../../assets/small/techBlog_dashboard.jpg'


function Portfolio(props) {
    return (
        <div className='portfolio-container'>
            <Work 
                name='WanderPro'
                repoLink='https://github.com/aaroncenteno/wanderpro'
                liveLink='http://wanderpro.herokuapp.com/'
                projectImage={wanderPro}
                className='work-item'
            />
            <Work 
                name='Fitness Pal'
                repoLink='https://github.com/aaroncenteno/fitness-pal'
                liveLink='https://fitness-pal-jhacms.herokuapp.com/'
                projectImage={fitnessPal}
                className='work-item'
            />
            <Work 
                name='Covid CA'
                repoLink='https://github.com/aaroncenteno/covid-ca'
                liveLink='https://aaroncenteno.github.io/covid-ca/'
                projectImage={covidCa}
                className='work-item'
            />
            <Work 
                name='Tech Blog'
                repoLink='https://github.com/aaroncenteno/tech-blog'
                liveLink='https://agile-waters-31192.herokuapp.com/'
                projectImage={techBlog}
                className='work-item'
            />
            <Work 
                name='Weather Dash'
                repoLink='https://github.com/aaroncenteno/weather-dashboard'
                liveLink='https://aaroncenteno.github.io/weather-dashboard/'
                projectImage={weatherDash}
                className='work-item'
            />
            <Work 
                name='Coding Quiz'
                repoLink='https://github.com/aaroncenteno/web-api-code-quiz'
                liveLink='https://aaroncenteno.github.io/web-api-code-quiz/'
                projectImage={codingQuiz}
                className='work-item'
            />
        </div>
    )
}

export default Portfolio;