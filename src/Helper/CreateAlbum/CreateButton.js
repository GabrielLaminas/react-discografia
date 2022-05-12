import React from 'react';
import { GlobalContext } from '../../Context/AlbumContext';
import './CreateButton.css';

const CreateButton = ({text}) => {
  const { setModal } = React.useContext(GlobalContext);

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