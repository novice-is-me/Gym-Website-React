import React from 'react'
import './Pricing.css';
import { PriceCard} from '../../components'; 
import WhyPower from '../../components/whyPower/WhyPower'; 
import { FaCheck } from "react-icons/fa";  


const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='pricing-container'> 
        <PriceCard Sessions="4 sessions" Pricing="$150" weekNumber="1 X Per Week" perNum="37"/>
        <PriceCard Sessions="8 sessions" Pricing="$250" weekNumber="2 X Per Week" perNum="31"/>
        <PriceCard Sessions="12 sessions" Pricing="$310" weekNumber="3 X Per Week" perNum="26"/>
      </div>
      <div className='pricing-adv'>
        <div className='pricing-adv-left'>
          <h2>Why POWERLAB?</h2> 
          <button type='button'>REGISTER</button>
        </div>
        <div className='pricing-adv-right'>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
          <p><WhyPower Reason="krukru"/></p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
