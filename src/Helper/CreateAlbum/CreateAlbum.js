import React from 'react';
import { useNavigate } from 'react-router-dom';
import { POST_ALBUNS } from '../../Service/api';

import Input from '../../Components/Input/Input';
import Modal, { ModalContainerButtons } from '../../Components/Modal/Modal';
import { Button, ButtonCancel, ButtonOpacity } from '../../Components/Buttons/Buttons';

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

      <ModalContainerButtons>
        {body.name && body.year
          ? <Button text="Confirmar" />
          : <ButtonOpacity text="Confirmar" />
        }

        <ButtonCancel 
          text="Cancelar"
          onClick={(e) => {
            e.preventDefault();
            setModal(false);
            navigate("/");
          }}
        />
      </ModalContainerButtons>
    </Modal>
  )
}

export default CreateAlbum;