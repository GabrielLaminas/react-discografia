import React from 'react';
import './Home.css';

import Header from '../../Layout/Header/Header';
import FormSearch from '../../Layout/Form/FormSearch';
import CreateButton from '../../Helper/CreateAlbum/CreateButton';
import Modal from '../../Helper/Modal/Modal';
import Albuns from '../../Layout/Albuns/Albuns';

import { GlobalContext } from '../../Context/AlbumContext';

const Home = () => {
  const { 
    album,
    modal, 
    setModal,
  } = React.useContext(GlobalContext);

  return (
    <>
      {modal.type === 'createAlbum' && <Modal setModal={setModal} />}

      <main className='main__container'>
        <Header />
        <FormSearch />
        <CreateButton text="Criar Álbum" />
        {album && <Albuns album={album} /> }
      </main>
    </>
  )
}

export default Home;