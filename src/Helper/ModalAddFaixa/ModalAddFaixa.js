import React from 'react';
import './ModalAddFaixa.css';

import { ADICIONAR_FAIXA } from '../../Service/api';

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
    <div className='ModalAddFaixa__container'>
      <form 
        className='ModalAddFaixa__container__form'
        onSubmit={handleAddFaixa}
      >
        <label htmlFor="title">Nome da Faixa</label>
        <input 
          type="text"
          name="title"
          id="title"
          value={body.title}
          onChange={handleChangeBody}
        />

        <label htmlFor="duration">Duração da Faixa</label>
        <input 
          type="number"
          name="duration"
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
      </form>
    </div>
  )
}

export default ModalAddFaixa;