import React from 'react';
import './Footer.css';

const Footer = ({content}) => {
  return (
    <div className='footer'>
      <div className='footer-content'>
          <p>{content}</p> 
      </div>
    </div>
  )
}

export default Footer
