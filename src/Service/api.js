const urlBase = 'https://tiao.supliu.com.br/api';

export function GET_ALBUNS(){
  return ({
    url: urlBase + '/album',
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