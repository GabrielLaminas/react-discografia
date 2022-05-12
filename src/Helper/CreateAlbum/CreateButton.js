import React from 'react';
import './CreateButton.css';

const CreateButton = ({text}) => {
  /*
  function handleClick(){
    setModal((modal) => !modal)
  }*/
  
  return (
    <div className='CreateButton__container'>
      <button>{text}</button>
    </div>
  )
}

export default CreateButton;