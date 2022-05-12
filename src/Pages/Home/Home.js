import React from 'react';
import './Home.css';

import Header from '../../Layout/Header/Header';
import FormSearch from '../../Layout/Form/FormSearch';
import CreateButton from '../../Helper/CreateAlbum/CreateButton';
import Modal from '../../Helper/Modal/Modal';
import Albuns from '../../Layout/Albuns/Albuns';

import { GET_ALBUNS } from '../../Service/api';

const Home = () => {
  const [album, setAlbum] = React.useState([]);
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    async function getAlbuns(){
      try {
        const { url, option } = GET_ALBUNS();
        const response = await fetch(url, option);
        const { data } = await response.json();
        setAlbum(data);
        console.log(data)
      } 
      catch (error) {
        console.log(error)
      }
    }
    getAlbuns();
  }, []);
  console.log('texte', modal)
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

export default Home;