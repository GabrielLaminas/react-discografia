import React from 'react';
import { ADICIONAR_FAIXA } from '../../Service/api';

import Input from '../../Components/Input/Input';
import Modal, { ModalContainerButtons } from '../../Components/Modal/Modal';
import { Button, ButtonCancel, ButtonOpacity } from '../../Components/Buttons/Buttons';

const CreateFaixa = ({id, setModal, setTrack, numberTracks}) => {
  const setNumber = (numberTracks) => {
    if(numberTracks.length > 0){
      return numberTracks[numberTracks.length - 1].number + 1;
    }
    return 1;
  }

  const [body, setBody] = React.useState({
    album_id: id,
    number: setNumber(numberTracks),
    title: '',
    duration: ''
  });

  function handleChangeBody({target}){
    if(target.name === 'title'){
      setBody({...body, title: target.value})
    }

    if(target.name === 'duration'){
      setBody({...body, duration: target.value})
    }
  }

  async function handleAddFaixa(e){
    e.preventDefault();
    
    try {
      if(body.album_id && body.number && body.title && body.duration){
        const { url, option } = ADICIONAR_FAIXA({
          album_id: Number(body.album_id),
          number: Number(body.number),
          title: body.title,
          duration: Number(body.duration)
        });
        const response = await fetch(url, option);

        if(response.ok){
          setTrack(numberTracks.length);
          setModal(false);
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      title="Adicionar uma nova faixa "
      handleSubmitValues={handleAddFaixa}
    >
      <Input 
        label="Nome da Faixa"
        type="text"
        id="title"
        value={body.title}
        onChange={handleChangeBody}
      />

      <Input 
        label="Duração da Faixa"
        type="number"
        id="duration"
        placeholder="Ex: 215"
        value={body.duration}
        onChange={handleChangeBody}
      />

      <ModalContainerButtons>
        {body.title && body.duration
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
  );
}

export default CreateFaixa;