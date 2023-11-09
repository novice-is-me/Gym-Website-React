import React, { useState } from 'react';
import './Navbar.css'; 

import {RiMenuLine, RiCloseLine} from 'react-icons/ri'; 

const Menu = () => (
  <>
  <a href="#home">Home </a>
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#team">Team</a>
  </>
) 
const NavBar = () => {  
  const [toggleMenu, setToggleMenu] = useState(false); 
  return ( 
    <div className='Navbar'>   
      <div className='navbar-content'> 
        <h2>Power Lab</h2>  
        <div className='navbar-menu'> 
          <Menu />    
        </div>
      </div> 
      <div className='navbar-menu-toggle'>
        {toggleMenu 
        ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/>
        : <RiMenuLine color='#fff' size={27} onClick={()=> setToggleMenu(true)}/>
      } 
      { toggleMenu && (
        <div className='navbar-toggle-menu'>
          <div className='navbar-menu-show'>
            <Menu/>
          </div> 
        </div>
      )}
      </div>
    </div>
  )
}

export default NavBar
