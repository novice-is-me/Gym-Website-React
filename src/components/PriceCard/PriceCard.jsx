import React from 'react';
import './PriceCard.css';

const PriceCard = ({Sessions,Pricing, weekNumber, perNum}) => {
  return ( 
    <div className='pricecard-container'>
      <div className='pricecard-container-upper'>
        <h2>{Sessions}</h2> 
        <h2>{Pricing}</h2> 
        <p>SEMI-PRIVATE TRAINING</p>
        <button type='button'>Select</button>
      </div>
      <div className='pricecard-container-bottom'>
        <p>{weekNumber}</p>
        <p>{perNum} Per Session</p> 
        <p>4 weeks</p> 
      </div>
    </div>
  )
}

export default PriceCard
