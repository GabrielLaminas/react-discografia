import React from 'react'

const Tracks = ({tracks}) => {
  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id}>
          <p>{track.id}</p>
          <p>{track.title}</p>
          <p>{track.duration}</p>
        </div>
      ))}
    </div>
  )
}

export default Tracks;