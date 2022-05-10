import React from 'react';
import './Button.css';

const Button = ({name}) => {
  return (
    <button className='button'>{name}</button>
  )
}

export default Button