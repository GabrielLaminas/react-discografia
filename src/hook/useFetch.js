import React from "react";

const useFetch = (buscar) => {
  const [discografia, setDiscografia] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getAlbuns(){
      try {
        const response = await fetch(`https://tiao.supliu.com.br/api/album?keyword=${buscar}`,
          {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': 'laminas533@gmail.com'
            }
          }
        )
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
  }, [buscar]);

  return { discografia, loading }
}

export default useFetch;