import React from 'react';
import './ModalDeleteFaixa.css';

import { useNavigate } from 'react-router-dom';
import { DELETE_FAIXA } from '../../Service/api';

const ModalDeleteFaixa = ({id, setModal}) => {
  const [idFaixa, setIdFaixa] = React.useState('');
  const navigate = useNavigate();

  async function handleDeleteFaixa(e){
    e.preventDefault();
    
    try {
      if(idFaixa){
        const {url, option} = DELETE_FAIXA(idFaixa);
        const response = await fetch(url, option);
        const data = await response.json();

        if(data){
          navigate(`/discografia/${id}`);
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
        
        <label htmlFor="id">Número da faixa</label>
        <input 
          type="number"
          id="id"
          name="id"
          value={idFaixa}
          onChange={({target}) => setIdFaixa(target.value)}
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