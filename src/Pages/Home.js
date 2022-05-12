import React from 'react';
import CreateButton from '../Helper/CreateAlbum/CreateButton';
import Albuns from '../Layout/Albuns/Albuns';
import FormSearch from '../Layout/Form/FormSearch';
import Header from '../Layout/Header/Header';
import { GET_ALBUNS } from '../Service/api';

const Home = () => {
  const [album, setAlbum] = React.useState([]);
  //const [modal, setModal] = React.useState(null);

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
    <>
      {/*modal && <Modal setModal={setModal} />*/}

      <main className='main__container'>
        <Header />
        <FormSearch />
        <CreateButton
          text="Criar Álbum" 
          //setModal={setModal} 
        />
        <Albuns album={album} />
      </main>
    </>
  )
}

export default Home