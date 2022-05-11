import React from 'react';
import './Albuns.css';

import Tracks from '../Tracks/Tracks';

const Albuns = ({album}) => {
  return (
    <section className='albuns__container'>
      {album.map((albuns) => (
        <div key={albuns.id}>
          <h2>Álbum: {albuns.name}, {albuns.year}</h2>
          <Tracks tracks={albuns?.tracks} />
        </div>
      ))}
    </section>
  )
}

export default Albuns;