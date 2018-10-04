const baseActorUrl = 'http://localhost:3001/api/v1/actors'
const baseUrl = 'http://localhost:3001/api/v1/'
const baseTheaterUrl = 'http://localhost:3001/api/v1/theaters'
const baseSeasonUrl = 'http://localhost:3001/api/v1/seasons'
const baseShowUrl = 'http://localhost:3001/api/v1/shows'
const baseTryoutUrl = 'http://localhost:3001/api/v1/tryouts'
const baseAuditionUrl = 'http://localhost:3001/api/v1/auditions'

export const fetchLoginActor = (actor) => {
  return fetch(`${baseUrl}login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ actor })
  }).then(resp => resp.json())
}

export const fetchAudition = (id) => {
  return fetch(`${baseAuditionUrl}/${id}`).then(resp => resp.json())
}

export const fetchTryout = (id) => {
  return fetch(`${baseTryoutUrl}/${id}`).then(resp => resp.json())
}

export const fetchShow = (id) => {
  return fetch(`${baseShowUrl}/${id}`).then(resp => resp.json())
}

export const fetchSeasons = () => {
  return fetch(baseSeasonUrl).then(resp => resp.json())
}


export const fetchSeason = (id) => {
  return fetch(`${baseSeasonUrl}/${id}`).then(resp => resp.json())
}

export const fetchTheaters = () => {
  return fetch(baseTheaterUrl).then(resp => resp.json())
}

export const fetchActor = (id) => {
  return fetch(`http://localhost:3001/api/v1/actors/${id}`)
  .then(resp => resp.json())
}

export const fetchUpdateCurrentActor = (id, body) => {
  return fetch(`${baseActorUrl}/${id}`, patchRequest(body))
}

export const fetchGet = (route, id) => {
  return fetch(`${baseUrl}${route}/${id}`).then(resp => resp.json())
}

export const fetchGetIndex = (route) => {
  return fetch(`${baseUrl}${route}`).then(resp => resp.json())
}

export const fetchPostTryout = (body) => {
  return fetch(baseUrl + 'tryouts', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(body)
  }).then(resp => resp.json())
}





function patchRequest(body) {
  return {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify(body)
  }
}

// function postRequest(body) {
//   return {
//     method: 'POST',
//     headers: headers(),
//     body: JSON.stringify(body)
//   }
// }

function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json"
  };
}

// function responseHandler(response) {
//     if (response.ok) {
//       return response.json();
//     } else {
//       console.log("ERROR", response.json());
//     }
// }
