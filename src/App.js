import React from 'react'
import './App.css';   

import {Footer, NavBar} from './components';
import {About, Contacts, Gallery, Header, Pricing, Service} from './containers';

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
        <Footer/>
      </div>
    </div>
  )
}

export default App
