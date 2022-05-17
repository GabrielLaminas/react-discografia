import React from 'react';
import { DELETE_FAIXA } from '../../Service/api';

import Input from '../../Components/Input/Input';
import Modal, { ModalContainerButtons } from '../../Components/Modal/Modal';
import { 
  Button, 
  ButtonCancel, 
  ButtonOpacity 
} from '../../Components/Buttons/Buttons';

const DeleteFaixa = ({setModal, setTrack, numberTracks}) => {
  const [idFaixa, setIdFaixa] = React.useState('');

  async function handleDeleteFaixa(e){
    e.preventDefault();
    
    try {
      if(idFaixa){
        const {url, option} = DELETE_FAIXA(idFaixa);
        const response = await fetch(url, option);
        const data = await response.json();

        if(data){
          setTrack(numberTracks.length);
          setModal(false);
        }
      }
    } 
    catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal
      title="Quer excluir a faixa?"
      handleSubmitValues={handleDeleteFaixa}
    >
      <Input 
        label="Número da faixa"
        type="number"
        id="id"
        placeholder="Nº: 205"
        value={idFaixa}
        setValue={setIdFaixa}
      />
      <ModalContainerButtons>
        {idFaixa 
          ? <Button text="Confirmar" />
          : <ButtonOpacity text="Confirmar" />
        }
        
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

export default DeleteFaixa;