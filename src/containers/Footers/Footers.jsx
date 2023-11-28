import React from 'react';
import './Footers.css';
import {Footer} from '../../components';
import { FaInstagram, FaTwitter, FaYoutube,  FaFacebookF} from "react-icons/fa";

const Footers = () => {
  return (
    <div className='footers' id='footer'>
       <div className='footer-container'>
          <div className='footer-explore'> 
              <Footer link={"#home"} content="Home"/>
              <Footer link={"#about"} content="About"/>
              <Footer link={"#gallery"} content="Gallery"/>
              <Footer link={"#services"} content="Services"/>
              <Footer link={"#pricing"} content="Pricing"/>
          </div>
          <div className='footer-contacts'>
              <div className='footer-contacts-div'>
                <FaFacebookF/>
                <div className='footer-contacts-right'>
                  <Footer content="Facebook"/>
                </div>
              </div>
              <div className='footer-contacts-div'>
                <FaInstagram/>
                <div className='footer-contacts-right'>
                  <Footer content="Instagram"/>
                </div>
              </div>
              <div className='footer-contacts-div'>
                <FaTwitter/>
                <div className='footer-contacts-right'>
                  <Footer content="Twitter"/>
                </div>
              </div>
              <div className='footer-contacts-div'>
                <FaYoutube/>
                <div className='footer-contacts-right'>
                  <Footer content="Youtube"/>
                </div>
              </div>
          </div> 
          <div className='message'>
            <h5>Message Us!</h5>
            <textarea name="" id="" cols="30" rows="10"></textarea> 
            <button type='button'>Send</button>
          </div>
       </div>
    </div>
  )
}

export default Footers
