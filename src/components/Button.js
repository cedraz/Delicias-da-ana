import React from 'react';
import './Button.css';

export const Button = ({children}) => {
  return (
    <button className='btn-container'>
      <div className='btn'>
        {children}
      </div>
    </button>
  )
}
