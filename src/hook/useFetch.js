import React from "react";
import { GET_ALBUNS } from "../Service/api";

const useFetch = (target) => {
  const [discografia, setDiscografia] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [tracks, setTrack] = React.useState(null);

  React.useEffect(() => {
    async function getAlbuns(){
      try {
        const { url, option } = GET_ALBUNS(target);
        const response = await fetch(url, option);
        const data = await response.json();
        setDiscografia(data)
      }
      catch(err){
        console.log(err)
      }
      finally{
        setLoading(false);
      }
    }
    getAlbuns();
  }, [target, tracks]);

  return { discografia, loading, setTrack }
}

export default useFetch;