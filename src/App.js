import React from 'react';
import './App.css';

import Header from './Layout/Header';
import FormSearch from './Layout/FormSearch';
import Albuns from './Layout/Albuns/Albuns';

import { GET_ALBUNS } from './Service/api';

const App = () => {
  const [album, setAlbum] = React.useState([]);

  React.useEffect(() => {
    async function getAlbuns(){
      try {
        const { url, option } = GET_ALBUNS();
        const response = await fetch(url, option);
        const { data } = await response.json();
        setAlbum(data);
      } 
      catch (error) {
        console.log(error)
      }
    }
    getAlbuns();
  }, []);

  return (
    <main className='main__container'>
      <Header />
      <FormSearch />
      <Albuns album={album} />
    </main>
  )
}

export default App;