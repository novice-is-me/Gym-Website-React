import React from 'react';
import './WhyPower.css';
import { FaCheck } from "react-icons/fa"; 

const WhyPower = ({Reason}) => {
  return (
    <div className='whyPower'>
      <span><FaCheck/></span> 
      <p>{Reason}</p>     
    </div>  
  )
}

export default WhyPower
