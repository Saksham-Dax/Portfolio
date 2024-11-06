import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn" >
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Saksham Dax</span>
            <br />
            A Software Engineer with 2+ years of Web Development Practice <br /> seeking full-time Web Developer roles.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Strong foundation in coding, problem-solving, and innovative thinking. "
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox 
            text="Experienced in various projects showcasing creativity and technical expertise."
            link="/projects"
            btnText="Visit my Projects"
        />
    ),
    4: (
        <InfoBox 
            text="Feel free to reach out for collaboration or project inquiries!"
            link="/contact"
            btnText="Reach me"
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
