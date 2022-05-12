import React from 'react';
import './App.css';

import Header from './Layout/Header/Header';
import FormSearch from './Layout/Form/FormSearch';
import Albuns from './Layout/Albuns/Albuns';
import CreateButton from './Helper/CreateAlbum/CreateButton';

import { GET_ALBUNS } from './Service/api';
import Modal from './Helper/Modal/Modal';

const App = () => {
  const [album, setAlbum] = React.useState([]);
  const [modal, setModal] = React.useState(null);

  React.useEffect(() => {
    async function getAlbuns(){
      try {
        const { url, option } = GET_ALBUNS();
        const response = await fetch(url, option);
        const { data } = await response.json();
        setAlbum(data);
      } 
      catch (error) {
        console.log(error)
      }
    }
    getAlbuns();
  }, []);

  console.log(album)

  return (
    <>
      {modal && <Modal setModal={setModal} />}

      <main className='main__container'>
        <Header />
        <FormSearch />
        <CreateButton 
          text="Criar Álbum" 
          setModal={setModal} 
        />
        <Albuns album={album} />
      </main>
    </>
  )
}

export default App;