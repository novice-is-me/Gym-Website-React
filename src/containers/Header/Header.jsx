import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-containerA'>
          <h1>LONGEVITY</h1> 
          <h3>FITNESS</h3>
        </div>
        <div className='header-container-button'>
          <button type='button'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header
