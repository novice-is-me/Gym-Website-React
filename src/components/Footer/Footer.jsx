import React from 'react';
import './Footer.css';

const Footer = ({content,link}) => {
  return ( 
    <div className='Footer'>
      <div className='footer-content'>
          <a href={link}>{content}</a> 
      </div> 
    </div>
  )
}

export default Footer
