import React from 'react';
import './Modal.css';

import { useNavigate } from 'react-router-dom';

import { POST_ALBUNS } from '../../Service/api';

const Modal = ({setModal}) => {
  const navigate = useNavigate();

  const [body, setBody] = React.useState({
    name: '',
    year: ''
  })

  function handleChangeBody({target}){
    if(target.name === 'name'){
      setBody({...body, name: target.value})
    }

    if(target.name === 'year'){
      setBody({...body, year: target.value})
    }
  }

  async function handleClickCreateAlbum(e){
    e.preventDefault();
    
    try {
      if(body.name && body.year){
        const { url, option } = POST_ALBUNS({
          name: body.name,
          year: body.year,
        });
        const response = await fetch(url, option);
        const data = await response.json();
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
    finally{
      setModal(false);
    }
  }

  return (
    <div className='Modal__container'>
      <form 
        className='Modal__container__form'
        onSubmit={handleClickCreateAlbum}
      >
        <label htmlFor="name">Nome</label>
        <input 
          type="text"
          id="name"
          name="name"
          value={body.name}
          onChange={handleChangeBody}
        />

        <label htmlFor="year">Ano</label>
        <input 
          type="text"
          id="year"
          name="year"
          value={body.year}
          onChange={handleChangeBody}
        />

        <div className='Modal__container__buttons'>
          <button 
            className='Buttons--cancel'
            onClick={(e) => {
              e.preventDefault();
              setModal(false);
              navigate("/");
            }}
          >
            Cancelar
          </button>
          <button className='Buttons--confirm'>
            Criar Álbum
          </button>
        </div>
      </form>
    </div>
  )
}

export default Modal;