import React from "react";
import { GET_ALBUNS } from "../Service/api";

export const GlobalContext = React.createContext();

const GlobalStore = ({children}) => {
  const [album, setAlbum] = React.useState(null);
  const [modal, setModal] = React.useState(false);

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

  const filterIdAlbum = (id) => {
    const filterAlbum = 
      album?.find((album) => album.id === Number(id))
    console.log('Callback filter por id')
    return filterAlbum;
  }

  return (
    <GlobalContext.Provider value={{
      album, modal, setModal, filterIdAlbum
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalStore;