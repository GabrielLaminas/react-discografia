import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DELETE_ALBUM } from '../../Service/api';

import Modal, { ModalContainerButtons } from '../../Components/Modal/Modal';
import { Button, ButtonCancel } from '../../Components/Buttons/Buttons';

const DeleteAlbum = ({id, setModal}) => {
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
      <ModalContainerButtons>
        <Button text="Confirmar" />

        <ButtonCancel 
          text="Cancelar"
          onClick={(e) => {
            e.preventDefault();
            setModal(false);
          }}
        />
      </ModalContainerButtons>
    </Modal>
  )
}

export default DeleteAlbum;