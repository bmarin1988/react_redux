export async function getChars () {
  const response = await fetch ('https://swapi.dev/api/people',{
    method:'GET',
    headers: {'Content-Type': 'application/json'}   
  })

  return response.json();
}

export async function getCharSelected (charId) {
  const response = await fetch (`https://swapi.dev/api/people/${charId}`,{
    method:'GET',
    headers: {'Content-Type': 'application/json'}   
  })

  return response;
}