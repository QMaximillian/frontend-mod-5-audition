export const fetchActor = () => {
  return fetch('http://localhost:3001/api/v1/actors/1')
  .then(resp => resp.json())
}
