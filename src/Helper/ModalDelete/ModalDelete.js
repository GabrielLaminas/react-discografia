import React from 'react';
import './ModalDelete.css';

import { useNavigate } from 'react-router-dom';
import { DELETE_ALBUM } from '../../Service/api';

import Modal from '../../Components/Modal/Modal';

const ModalDelete = ({id, setModal}) => {
  const navigate = useNavigate();

  async function handleDeleteAlbum(e){
    e.preventDefault();
    try {
      const {url, option} = DELETE_ALBUM(id);
      const response = await fetch(url, option);
      const data = await response.json();
      
      if(data){
        setModal(false);
        navigate('/');
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
        title="Quer excluir o álbum?"
        handleSubmitValues={handleDeleteAlbum}
      >
      <div className='ModalDelete__container__buttons'>
        <button className='Button--confirm'>
          Confirmar
        </button>
        
        <button 
          className='Button--cancel'
          onClick={(e) => {
            e.preventDefault();
            setModal(false);
          }}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  )
}

export default ModalDelete;