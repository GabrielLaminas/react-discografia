import React from 'react';
import './ModalDelete.css';

import { useNavigate } from 'react-router-dom';
import { DELETE_ALBUM } from '../../Service/api';

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
    <div className='ModalDelete__container'>
      <form 
        className='ModalDelete__container__form'
        onSubmit={handleDeleteAlbum}
      >
        <h2>Quer excluir o álbum?</h2>

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
      </form>
    </div>
  )
}

export default ModalDelete;