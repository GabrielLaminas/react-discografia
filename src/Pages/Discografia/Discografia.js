import React from 'react';
import '../../Layout/Albuns/Albuns.css';
import '../Home/Home.css';
import './Discografia.css';

import { Link, useParams } from 'react-router-dom';
import Tracks from '../../Layout/Tracks/Tracks';

import ModalDelete from '../../Helper/ModalDelete/ModalDelete';
import ModalAddFaixa from '../../Helper/ModalAddFaixa/ModalAddFaixa';
import ModalDeleteFaixa from '../../Helper/ModalDeleteFaixa/ModalDeleteFaixa';

import useFetch from '../../hook/useFetch';

const Discografia = () => {
  const { id } = useParams();
  const { discografia } = useFetch('');
  const [modal, setModal] = React.useState({
    status: false,
    type: '',
  });

  function filterIdAlbum(){
    const filterAlbum = discografia?.data.find((album) => album.id === Number(id))
    return filterAlbum;
  }

  const dataAlbum = filterIdAlbum();

  return (
    <>
      {modal.type === 'deleteAlbum' && <ModalDelete id={id} setModal={setModal} />}
      {modal.type ==='createFaixa' && <ModalAddFaixa id={id} setModal={setModal} />}
      {modal.type ==='deleteFaixa' && <ModalDeleteFaixa id={id} setModal={setModal} />}

      <main className='main__container'>
        <header className='Header__discografia'>
          <Link to="/" style={{backgroundColor: '#333333'}}>Tela Principal</Link>
          <h1>Discografia</h1>
        </header>

        <section className='Section__discografia'>
          <button  
            style={{backgroundColor: '#d63031'}}
            onClick={() => setModal((modal) => ({state: !modal.state, type: 'deleteAlbum'}))}
          >
            Deletar Álbum
          </button>

          <button 
            style={{backgroundColor: '#0984E3'}}
            onClick={() => setModal((modal) => ({state: !modal.state, type: 'createFaixa'}))}
          >
            Adicionar Faixa
          </button>

          {dataAlbum?.tracks.length > 0 && (
            <button
              style={{backgroundColor: '#d63031'}} 
              onClick={() => setModal((modal) => ({state: !modal.state, type: 'deleteFaixa'}))}
            >
              Deletar Faixa
            </button>
          )}
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