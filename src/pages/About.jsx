import React from 'react'
import { Link } from 'react-router-dom';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills, socialLinks } from '../constants'
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Saksham Dax</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>A Software Developer from India. With a keen eye for detail and a drive for innovation, I specialize in creating efficient, cutting-edge software solutions. </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12 ">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className=' btn-front rounded-xl flex justify-center items-center '>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className='subhead-text'>Work Experience </h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Eager software developer with a strong foundation in coding, passionate about learning, and ready to tackle real-world challenges in the tech industry. </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className=' flex justify-center items-center w-full h-full '>
                  <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }} >
                <div>
                  <h3 className=' text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className=' text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className=' my-5 list-disc ml-5 space-y-2 '>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className=' text-black-500/50 font-normal pl-1 text-sm '>
                      {point}
                    </li>
                  ))}
                  <li><Link
                  to={experience.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' font-semibold text-blue-600'>
                  Certificate
                </Link></li>
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className=' border-slate-200 ' />

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Socials</h3>

        <div className="mt-16 flex flex-wrap gap-12 ">
          {socialLinks.map((social) => (
            <Link
              to={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className=' font-semibold text-blue-600'>
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className=' btn-front rounded-xl flex justify-center items-center '>
                  <img
                    src={social.iconUrl}
                    alt={social.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CTA />
    </section>
  )
}

export default About
