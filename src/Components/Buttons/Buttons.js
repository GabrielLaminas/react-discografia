import React from 'react';
import './Buttons.css';

export const Button = ({text}) => {
  return (
    <button className='Button__confirm'>
      {text}
    </button>
  )
}

export const ButtonOpacity = ({text}) => {
  return (
    <button className='Button__opacity'>
      {text}
    </button>
  )
}

export const ButtonCancel = ({text, ...props}) => {
  return (
    <button 
      className='Button__cancel'
      {...props}
    >
      {text}
    </button>
  )
}
