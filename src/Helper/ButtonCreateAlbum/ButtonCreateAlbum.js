import React from 'react';
import './ButtonCreateAlbum.css';
import 'boxicons';

const ButtonCreateAlbum = ({text, setModal}) => {

  function handleModal(e){
    e.preventDefault()
    setModal((modal) => !modal)
    setModal((modal) => ({state: !modal.state, type: 'createAlbum'}))
  }
  
  return (
    <section className='CreateButton__container'>
      <button onClick={handleModal}>
        <box-icon name='folder-plus' color='white' />
        {text}
      </button>
    </section>
  )
}

export default ButtonCreateAlbum;