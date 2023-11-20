import React from 'react';
import './Footers.css';
import {Footer} from '../../components';
import { FaInstagram, FaTwitter, FaYoutube,  FaFacebookF} from "react-icons/fa";

const Footers = () => {
  return (
    <div className='footer'>
       <div className='footer-container'>
        <div className='footer-explore'>
            <Footer content="Home"/>
            <Footer content="About"/>
            <Footer content="Gallery"/>
            <Footer content="Services"/>
            <Footer content="Pricing"/>
        </div>
        <div className='footer-contacts'>
            <div>
            
            <Footer content="facebook"/>
            </div>
        </div>
        <div className='footer-message'></div>
       </div>
    </div>
  )
}

export default Footers
