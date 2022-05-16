import React from 'react';
import './Input.css';

const Input = ({
  label, 
  type, 
  id, 
  value, 
  setValue,
  ...props
}) => {
  return (
    <>
      <label htmlFor={id} className="Input_label">
        {label}
      </label>
      <input 
        className="Input"
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={({target}) => setValue(target.value)}
        {...props}
      />
    </>
  )
}

export default Input;