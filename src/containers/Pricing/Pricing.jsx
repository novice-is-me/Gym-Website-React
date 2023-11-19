import React from 'react'
import './Pricing.css';
import { PriceCard} from '../../components'; 
import WhyPower from '../../components/whyPower/WhyPower'; 
 
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
          <h2>Why <br />POWERLAB?</h2> 
          <button type='button'>REGISTER</button>
        </div>
        <div className='pricing-adv-right'>  
          <p><WhyPower Reason="Most effective training methods."/></p>
          <p><WhyPower Reason="Individualised exercises for each client"/></p>
          <p><WhyPower Reason="Workout duration 55 min"/></p>
          <p><WhyPower Reason="Flexible schedule."/></p>
          <p><WhyPower Reason="2-5 persons per Class only."/></p>
          <p><WhyPower Reason="Professional Personal Trainer."/></p>
          <p><WhyPower Reason="Friendly community."/></p>
          <p><WhyPower Reason="Private Showers & towels."/></p>
          <p><WhyPower Reason="Attention to interior details."/></p>
          <p><WhyPower Reason="Always good coffee."/></p>
        </div>
      </div>
    </div>
  )
}

export default Pricing
