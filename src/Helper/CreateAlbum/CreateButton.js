import React from 'react';
import './CreateButton.css';

const CreateButton = ({text, setModal}) => {
  function handleModal(e){
    e.preventDefault()
    setModal((modal) => !modal)
  }
  return (
    <div className='CreateButton__container'>
      <button onClick={handleModal}>{text}</button>
    </div>
  )
}

export default CreateButton;