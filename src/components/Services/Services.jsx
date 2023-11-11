import React from 'react'
import './Services.css';

const Services = ({imgUrl,title,subtitle}) => {
  return (
    <div className='services'> 
      <div className='services-img'>
        <img src={imgUrl} alt="" />
      </div>
      <div className='services-subtitle'>
        <h5>{title}</h5>
        <p>{subtitle}</p>
      </div>
    </div> 
  )
}

export default Services 
