import React from 'react';
import './ModalAddFaixa.css';

import { ADICIONAR_FAIXA } from '../../Service/api';

import Input from '../../Components/Input/Input';
import Modal from '../../Components/Modal/Modal';

const ModalAddFaixa = ({id, setModal, setTrack, numberTracks}) => {
  const [body, setBody] = React.useState({
    album_id: id,
    number: numberTracks[numberTracks.length - 1].number + 1,
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
      title="Adicionar uma nova faixa"
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
        value={body.duration}
        onChange={handleChangeBody}
      />

      <div className='ModalAddFaixa__container__buttons'>
        {body.title && body.duration 
        ? (
            <button className='Button--confirm'>
              Confirmar
            </button>
          )
        : (
            <button
              style={{
                opacity: 0.5, 
                pointerEvents: 'none'
              }}
              className='Button--confirm'
            >
              Confirmar
            </button>
          )
        }
          
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
  );
}

export default ModalAddFaixa;