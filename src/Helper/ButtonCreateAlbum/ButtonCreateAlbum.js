import React from 'react';
import './ButtonCreateAlbum.css';

const ButtonCreateAlbum = ({text, setModal}) => {

  function handleModal(e){
    e.preventDefault()
    setModal((modal) => !modal)
    setModal((modal) => ({state: !modal.state, type: 'createAlbum'}))
  }
  
  return (
    <div className='CreateButton__container'>
      <button onClick={handleModal}>{text}</button>
    </div>
  )
}

export default ButtonCreateAlbum;