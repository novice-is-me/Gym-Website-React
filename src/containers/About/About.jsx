import React from 'react'
import './About.css';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-container'>
        <div className='about-container-vid'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CS_WigGHwXc?si=SKEf5olGkPks5rTW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        </div>
        <div className='about-container-info'>
          <h2>PowerLab</h2>
          <p>At PowerLab Gym, we are dedicated to transforming lives through the
             power of fitness. Our state-of-the-art facility provides a dynamic 
             and motivating environment where fitness enthusiasts of all levels can 
             pursue their health and wellness goals. With cutting-edge equipment, 
             expert trainers, and a supportive community, we strive to empower our 
             members to unleash their full potential.</p>
          <h6>- ChiChi Fajutagana</h6> 
        </div>
      </div>
    </div>
  )
}

export default About
