import React from 'react'
import {brain,energy,health,smile,walking, yoga} from './import';
import Services from '../../components/Services/Services';
import './Service.css';

const Service = () => {
  return (
    <div className='service' id='services'>
      <div className='service-container'>
        <div className='service-container-header'>
          <h3>PowerLab</h3>
          <p>"2 in 1: PERSONAL TRAINING EXPERIENCE IN A SMALL GROUP FORMAT. WORKOUTS MADE FOR GROUPS OF 3-5 PERSONS. WE GUARANTEE YOU, IT'S THE BEST WAY TO GET THE RESULTS YOU ALWAYS WANTED. ENJOY HIGH QUALITY TRAINING IN SMALL GROUP ATMOSPHERE!"</p>
        </div>
        <div className='service-container-service'> 
          <Services imgUrl={brain} title="Feeling" subtitle="Life is beautiful. Enjoy your youth make your body proud"/>
          <Services imgUrl={energy} title="Health" subtitle="Overweight, back pain, increased cholesterol? Our first goal - to fix it!"/>
          <Services imgUrl={health} title="Look" subtitle="Create Your body. We will help to make it!"/>
          <Services imgUrl={smile} title="Self Confident" subtitle="Feel confident in your body, your look and your strength."/>
          <Services imgUrl={walking} title="Activity" subtitle="Get that feeling when your body is capable to do anything you want it to do."/>
          <Services imgUrl={yoga} title="Energy" subtitle="Start to train in a gym! Feel energized even at the end of your day."/>
        </div>
      </div>
    </div>
  )
}

export default Service
