import React from 'react';
import '../../Layout/Albuns/Albuns.css';
import '../Home/Home.css';
import './Discografia.css';

import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/AlbumContext';
import Tracks from '../../Layout/Tracks/Tracks';

//import ModalDelete from '../../Helper/ModalDelete/ModalDelete';
import ModalAddFaixa from '../../Helper/ModalAddFaixa/ModalAddFaixa';

const Discografia = () => {
  const { 
    modal, 
    setModal, 
    filterIdAlbum 
  } = React.useContext(GlobalContext);
  const { id } = useParams();
  const dataAlbum = filterIdAlbum(id);

  return (
    <>
      {/*modal && <ModalDelete id={id} setModal={setModal} />*/}
      {modal && <ModalAddFaixa id={id} setModal={setModal} />}

      <main className='main__container'>
        <header className='Header__discografia'>
          <Link to="/" style={{backgroundColor: '#333333'}}>Tela Principal</Link>
          <h1>Discografia</h1>
        </header>

        <section className='Section__discografia'>
          <button  
            style={{backgroundColor: '#d63031'}}
            onClick={() => setModal(!modal)}
          >
            Deletar Álbum
          </button>

          <button 
            style={{backgroundColor: '#0984E3'}}
            onClick={() => setModal(!modal)}
          >
            Adicionar Faixa
          </button>

          <button
            style={{backgroundColor: '#d63031'}} 
            onClick={() => setModal(!modal)}>
            Deletar Faixa
          </button>
        </section>
        
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