import React from 'react'
import './App.css';   

import {NavBar} from './components';
import {About, Contacts, Gallery, Header, Pricing, Service, Footers} from './containers';

const App = () => {
  return (
    <div className='App'>  
      <div>
        <NavBar/>  
        <Header/>
        <About/>
        <Gallery/>
        <Service/> 
        <Pricing/>   
        <Contacts/>  
        <Footers/>
      </div>
    </div>
  )
}

export default App
