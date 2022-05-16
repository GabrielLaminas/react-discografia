const urlBase = 'https://tiao.supliu.com.br/api';

export function GET_ALBUNS(search){
  return ({
    url: urlBase +  `/album?keyword=${search}`,
    option: {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'laminas533@gmail.com'
      }
    }
  })
}

export function POST_ALBUNS(body){
  return ({
    url: urlBase + '/album',
    option: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'laminas533@gmail.com'
      },
      body: JSON.stringify(body)
    }
  })
}

export function DELETE_ALBUM(id){
  return ({
    url: urlBase + `/album/${Number(id)}`,
    option: {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'laminas533@gmail.com'
      }
    }
  })
}

export function ADICIONAR_FAIXA(body){
  return ({
    url: urlBase + '/track',
    option: {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'laminas533@gmail.com'
      },
      body: JSON.stringify(body)
    }
  })
}

export function DELETE_FAIXA(id){
  return ({
    url: urlBase + `/track/${Number(id)}`,
    option: {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'laminas533@gmail.com'
      }
    } 
  })
}