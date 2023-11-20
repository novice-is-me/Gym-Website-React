import React from 'react';
import './Contacts.css';
import {Form} from '../../components';

const Contacts = () => {
  return (
    <div className='contacts'>
      <div className='contacts-container'>
        <div className='contacts-container-left'>
          <h2>CREATE <br />YOURSELF!</h2>
          <h4>SEMI-PRIVATE TRAINING</h4>
        </div>
        <div className='contacts-container-right'>
          <Form Label="Name"/>
          <Form Label="Email"/> 
          <Form Label="Phone"/>
        </div>
      </div>
    </div>
  )
}

export default Contacts
