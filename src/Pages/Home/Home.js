import React from 'react';
import './Home.css';

import Header from '../../Layout/Header/Header';
import FormSearch from '../../Layout/Form/FormSearch';
import CreateAlbum from '../../Helper/CreateAlbum/CreateAlbum';
import ButtonCreateAlbum from '../../Helper/ButtonCreateAlbum/ButtonCreateAlbum';
import Albuns from '../../Layout/Albuns/Albuns';

import useFetch from '../../hook/useFetch';
import Loading from '../../Helper/Loading/Loading';

const Home = () => {
  const [search, setSearch] = React.useState('');
  const { discografia, loading } = useFetch(search);
  const [modal, setModal] = React.useState({
    status: false,
    type: '',
  });

  return (
    <>
      {modal.type === 'createAlbum' && (
        <CreateAlbum setModal={setModal} />
      )}

      <main className='main__container'>
        <Header />
        <FormSearch setSearch={setSearch} />
        <ButtonCreateAlbum text="Criar Álbum" setModal={setModal} />
        {loading && <Loading />}
        {discografia?.data && <Albuns album={discografia?.data} /> }
      </main>
    </>
  )
}

export default Home;