import React from 'react'
import "./about.css"
import ME from "../../assets/MEMEME.JPG"
import {FaAward} from "react-icons/fa"
import {FaUserGraduate} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt='about'/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Exprience</h5>
              <small>1+ Years Working (Internship)</small>
            </article>
            <article className='about_card'>
            <FaUserGraduate className='about_icon'/>
              <h5>Education</h5>
              <small>Second Upper Class</small><br/>
              <small>University of Southampton</small><br/>
              <small>Electroninc Engineering</small>
              
            </article>
            <article className='about_card'>
            <FaAward className='about_icon'/>
              <h5>Projects</h5>
              <small></small>
            </article>
          </div>
          <p>
            Motivated Engineering Graduate from University of Southampton with 1 year experience in software development.
          </p>
          <p>Actively looking for a Entry level software development with a fast-paced and ambitious company.</p>
          <p>Based in London</p>
          <a href='#contact' className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About