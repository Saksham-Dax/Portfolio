import React from 'react'
import { certifications, projects } from '../constants';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Projects = () => {
  return (
    <section className="max-container">
      <h1 className='head-text'>
        My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>I'm a passionate and dedicated software developer from India, eager to apply my skills and knowledge in real-world projects. I thrive on learning new technologies, solving complex problems, and creating efficient, innovative solutions that make a difference. </p>
      </div>

      <div className=' flex flex-wrap my-20 gap-16 '>
        {projects.map((project) => (
          <div className=" lg:w-[400px] w-full" key={project.name}>
            <div className=" block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className=' btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='Project Icon'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className=' mt-5 flex flex-col'>
              <h4 className=' text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className=' mt-2 text-slate-500 '>
                {project.description}
              </p>
              <div className=' mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className=' font-semibold text-blue-600'>
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className=' w-4 h-4 object-contain' />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className=' border-slate-200' />
      <div className="py-16">
        <h3 className='subhead-text'>Certifications</h3>
        <div className="mt-12 flex">
          <VerticalTimeline>
            {certifications.map((certificate) => (
              <VerticalTimelineElement
                key={certificate.name}
                date={certificate.date}
                icon={<div className=' flex justify-center items-center w-full h-full '>
                  <img src={certificate.icon} alt={certificate.company_name} className='w-[60%] h-[60%] object-contain' />
                </div>}
                iconStyle={{ background: certificate.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: certificate.iconBg,
                  boxShadow: 'none',
                }} >
                <div>
                  <h3 className=' text-black text-xl font-poppins font-semibold'>
                    {certificate.title}
                  </h3>
                  <p className=' text-black-500 font-medium font-base' style={{ margin: 0 }}>
                    {certificate.company_name}
                  </p>
                </div>
                <div className=' mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={certificate.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className=' font-semibold text-blue-600'>
                    Certificate🔗
                  </Link>
                </div>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <CTA />
    </section>
  )
}

export default Projects
