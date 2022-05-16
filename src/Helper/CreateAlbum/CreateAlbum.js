import React from 'react';
import './CreateAlbum.css';

import { useNavigate } from 'react-router-dom';

import { POST_ALBUNS } from '../../Service/api';

import Input from '../../Components/Input/Input';
import Modal from '../../Components/Modal/Modal';

const CreateAlbum = ({setModal}) => {
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
        
        if(response.ok){
          const { id } = await response.json();
          setModal(false);
          navigate(`/discografia/${id}`);
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal
      title="Criar um novo álbum"
      handleSubmitValues={handleClickCreateAlbum}
    >
      <Input 
        label="Nome"
        type="text"
        id="name"
        value={body.name}
        onChange={handleChangeBody}
      />

      <Input 
        label="Ano"
        type="text"
        id="year"
        value={body.year}
        onChange={handleChangeBody}
      />

      <div className='Modal__container__buttons'>
        {body.name && body.year 
        ? (
            <button className='Buttons--confirm'>
              Criar
            </button>
          )
        : (
            <button
              style={{
                opacity: 0.5, 
                pointerEvents: 'none'
              }}
              className='Buttons--confirm'
            >
              Criar
            </button>
          )
        }

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
      </div>  
    </Modal>
  )
}

export default CreateAlbum;