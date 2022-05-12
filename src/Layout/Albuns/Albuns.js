import React from 'react';
import './Albuns.css';

import Tracks from '../Tracks/Tracks';
import { Link } from 'react-router-dom';

const Albuns = ({album}) => {
  return (
    <section className='albuns__container'>
      {album?.map((albuns) => (
        <Link 
          to={`/discografia/${albuns.id}`} 
          key={albuns.id} 
          className="albuns__album"
        >
          <h2>Álbum: {albuns.name}, {albuns.year}</h2>
          <Tracks tracks={albuns?.tracks} />
        </Link>
      ))}
    </section>
  )
}

export default Albuns;