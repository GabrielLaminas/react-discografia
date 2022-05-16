import React from 'react';
import './Modal.css';

const Modal = ({
  title, 
  handleSubmitValues, 
  children
}) => {
  return (
    <div className='Modal__container'>
      <form
        className='Modal__container__form'
        onSubmit={handleSubmitValues}
      >
        <h1>{title}</h1>
        {children}
      </form>
    </div>
  )
}

export default Modal;