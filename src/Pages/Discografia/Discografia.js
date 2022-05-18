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

import { 
  BiHome,
  BiFolderMinus,
  BiListPlus,
  BiListMinus
} from "react-icons/bi";

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
            <BiHome />
            <span>Tela Principal</span>
          </Link>
          <h1>Discografia</h1>
        </header>

        <section className='Section__discografia'>
          <button  
            className='Discografia__deleteAlbum'
            onClick={() => setModal((modal) => ({state: !modal.state, type: 'deleteAlbum'}))}
          >
            <BiFolderMinus />
            <span>Deletar Álbum</span>  
          </button>

          <button 
            className='Discografia__adicionarFaixa'
            onClick={() => setModal((modal) => ({state: !modal.state, type: 'createFaixa'}))}
          >

            <BiListPlus />
            <span>Adicionar Faixa</span>
          </button>

          {dataAlbum?.tracks.length > 0 && (
            <button
              className='Discografia__deleteFaixa'
              onClick={() => setModal((modal) => ({state: !modal.state, type: 'deleteFaixa'}))}
            >
              <BiListMinus />
              <span>Deletar Faixa</span>
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