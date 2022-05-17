import React from 'react';
import './Tracks.css';

const Tracks = ({tracks}) => {
  return (
    <div>
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
        <div key={track.id} className='Tracks__grid'>
          <p>{track.id}</p>
          <p>{track.title}</p>
          <p>{track.duration}</p>
        </div>
      ))}
    </div>
  )
}

export default Tracks;