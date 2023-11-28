import React from 'react';
import './Gallery.css';
import { image1,image2,image3,image4 } from './import';

const Gallery = () => {
  return (
    <div className='gallery' id='gallery'>
      <div className='gallery-container'>
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
    </div>
  )
}

export default Gallery
