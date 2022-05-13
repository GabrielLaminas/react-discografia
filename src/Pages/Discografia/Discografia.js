import React from 'react';
import '../../Layout/Albuns/Albuns.css';
import '../Home/Home.css';
import './Discografia.css';

import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/AlbumContext';
import Tracks from '../../Layout/Tracks/Tracks';

import ModalDelete from '../../Helper/ModalDelete/ModalDelete';

const Discografia = () => {
  const { modal, setModal, filterIdAlbum } = React.useContext(GlobalContext);
  const { id } = useParams();
  const dataAlbum = filterIdAlbum(id);

  return (
    <>
      {modal && <ModalDelete id={id} setModal={setModal} />}
      <main className='main__container'>
        <header className='Header__discografia'>
          <h1>Discografia</h1>
          <button onClick={() => setModal(!modal)}>
            Deletar Álbum
          </button>
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