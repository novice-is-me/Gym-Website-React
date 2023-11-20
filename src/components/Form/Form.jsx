import React from 'react';
import './Form.css';

const Form = ({Label}) => {
  return (
    <div className='form'>
      <div className='form-container'>
        <form action="">
            <div className='form-container-content'>
                <label htmlFor="name">{Label}</label>
                <input type="text" />
            </div>
        </form>
      </div>
    </div>
  )
}

export default Form
