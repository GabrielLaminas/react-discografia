import React from 'react';
import '../Home/Home.css';
import './Discografia.css';

import { Link, useParams } from 'react-router-dom';
import Tracks from '../../Layout/Tracks/Tracks';

import DeleteAlbum from '../../Helper/DeleteAlbum/DeleteAlbum';
import CreateFaixa from '../../Helper/CreateFaixa/CreateFaixa';
import DeleteFaixa from '../../Helper/DeleteFaixa/DeleteFaixa';

import useFetch from '../../hook/useFetch';
import Loading from '../../Helper/Loading/Loading';

import 'boxicons';

const Discografia = () => {
  const { id } = useParams();
  const { discografia, loading, setTrack } = useFetch('');
  const [modal, setModal] = React.useState({
    status: false,
    type: '',
  });

  function filterIdAlbum(){
    const filterAlbum 
      = discografia?.data.find((album) => album.id === Number(id))
    return filterAlbum;
  }

  const dataAlbum = filterIdAlbum();

  return (
    <>
      {modal.type === 'deleteAlbum' && (
        <DeleteAlbum
          id={id} 
          setModal={setModal} 
        />
      )}

      {modal.type ==='createFaixa' && (
        <CreateFaixa 
          id={id} 
          setModal={setModal}
          setTrack={setTrack} 
          numberTracks={dataAlbum?.tracks}   
        />
      )}

      {modal.type ==='deleteFaixa' && (
        <DeleteFaixa
          setModal={setModal} 
          setTrack={setTrack} 
          numberTracks={dataAlbum?.tracks} 
        />
      )}

      <main className='main__container'>
        <header className='Header__discografia'>
          <Link to="/">
            <box-icon name='home-alt-2' />
            Tela Principal
          </Link>
          <h1>Discografia</h1>
        </header>

        <section className='Section__discografia'>
          <button  
            style={{backgroundColor: '#d63031'}}
            onClick={() => setModal((modal) => ({state: !modal.state, type: 'deleteAlbum'}))}
          >
            <box-icon name='folder-minus' color='white' />
            Deletar Álbum
          </button>

          <button 
            style={{backgroundColor: '#0984E3'}}
            onClick={() => setModal((modal) => ({state: !modal.state, type: 'createFaixa'}))}
          >
            <box-icon name='list-plus' color='white' />
            Adicionar Faixa
          </button>

          {dataAlbum?.tracks.length > 0 && (
            <button
              style={{backgroundColor: '#d63031'}} 
              onClick={() => setModal((modal) => ({state: !modal.state, type: 'deleteFaixa'}))}
            >
              <box-icon name='list-minus' color='white' />
              Deletar Faixa
            </button>
          )}
        </section>
        
        {loading && <Loading />}
        
        {dataAlbum && (
          <section className='Discografia__container'>
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