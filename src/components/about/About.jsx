import React from 'react'
import './about.css'
import ME from '../../assets/rotatePhoto.jpg'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {GiPencilBrush} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiTwotoneExperiment className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Working with</h5>
              <small>HTML, CSS, JS, React, Django</small>
            </article>

            <article className='about__card'>
              <GiPencilBrush className='about__icon'/>
              <h5>Design</h5>
              <small>3+ Years Creating</small>
            </article>
          </div>

          <p>I'm a student of the Mendeleev University of Chemical Technology, studying in the specialty information systems and technologies. I'm passionate about creating websites and data science.</p>

          <a href="#contact" className='btn btn-primary'>Contact with me</a>

        </div>
      </div>
    </section>
  )
}

export default About