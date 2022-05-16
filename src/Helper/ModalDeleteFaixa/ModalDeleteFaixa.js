import React from 'react';
import './ModalDeleteFaixa.css';

import { DELETE_FAIXA } from '../../Service/api';
import Input from '../../Components/Input/Input';

const ModalDeleteFaixa = ({setModal, setTrack, numberTracks}) => {
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
    <div className='ModalDeleteFaixa__container'>
      <form 
        className='ModalDeleteFaixa__container__form'
        onSubmit={handleDeleteFaixa}
      >
        <Input 
          label="Número da faixa"
          type="number"
          id="id"
          value={idFaixa}
          setValue={setIdFaixa}
        />

        <div className='ModalDeleteFaixa__container__buttons'>
          {idFaixa 
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

export default ModalDeleteFaixa;