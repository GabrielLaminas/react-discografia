import React from 'react';
import './CreateButton.css';

const CreateButton = ({text, setModal}) => {
  function handleClick(){
    setModal((modal) => !modal)
  }
  
  return (
    <div className='CreateButton__container'>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default CreateButton;