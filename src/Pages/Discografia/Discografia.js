import React from 'react';
import '../../Layout/Albuns/Albuns.css';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/AlbumContext';
import '../Home/Home.css';

import Tracks from '../../Layout/Tracks/Tracks';
import CreateButton from '../../Helper/CreateAlbum/CreateButton';
import Modal from '../../Helper/Modal/Modal';

const Discografia = () => {
  const { 
    filterIdAlbum, 
    modal, 
    setModal 
  } = React.useContext(GlobalContext);
  const { id } = useParams();
  const dataAlbum = filterIdAlbum(id);

  return (
    <>
      {modal && <Modal setModal={setModal} />}

      <main className='main__container'>
        <header style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
        >
          <h1>Discografia</h1>
          <CreateButton text="Deletar Álbum" />
        </header>
        {dataAlbum && (
          <section className='albuns__container'>
            <h2>
              Álbum: {dataAlbum.name}, {dataAlbum.year}
            </h2>

            <Tracks tracks={dataAlbum.tracks}/>
          </section>
        )}
      </main>
    </>
  )
}

export default Discografia;