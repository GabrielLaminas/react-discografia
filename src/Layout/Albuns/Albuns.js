import React from 'react';
import Tracks from '../Tracks/Tracks';

const Albuns = ({album}) => {
  return (
    <section>
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