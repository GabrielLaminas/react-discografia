import React from 'react';
import './Tracks.css';

const Tracks = ({tracks}) => {
  return (
    <article>
      {tracks.length > 0 
      ? (
          <div className='Tracks__grid'>
            <p>Nº</p>
            <p>Faixa</p>
            <p>Duração</p>
          </div>
        )
      : (
          <p style={{color: '#0984e3'}}>
            Ainda não possui faixas.
          </p>
        )
      }

      {tracks?.map((track) => (
        <ul key={track.id} className='Tracks__grid'>
          <li>{track.id}</li>
          <li>{track.title}</li>
          <li>{String(track.duration)[0].concat(':', String(track.duration).slice(1))}</li>
        </ul>
      ))}
    </article>
  )
}

export default Tracks;