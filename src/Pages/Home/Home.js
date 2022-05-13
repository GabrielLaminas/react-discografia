import React from 'react';
import './Home.css';

import Header from '../../Layout/Header/Header';
import FormSearch from '../../Layout/Form/FormSearch';
import CreateButton from '../../Helper/CreateAlbum/CreateButton';
import Modal from '../../Helper/Modal/Modal';
import Albuns from '../../Layout/Albuns/Albuns';

import useFetch from '../../hook/useFetch';

const Home = () => {
  const [search, setSearch] = React.useState('');
  const { discografia } = useFetch(search);
  const [modal, setModal] = React.useState({
    status: false,
    type: '',
  });

  return (
    <>
      {modal.type === 'createAlbum' && <Modal setModal={setModal} />}

      <main className='main__container'>
        <Header />
        <FormSearch search={search} setSearch={setSearch} />
        <CreateButton text="Criar Álbum" setModal={setModal} />
        {discografia?.data && <Albuns album={discografia?.data} /> }
      </main>
    </>
  )
}

export default Home;