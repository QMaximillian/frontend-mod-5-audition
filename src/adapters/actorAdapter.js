const baseActorUrl = 'http://localhost:3001/api/v1/actors'
const baseUrl = 'http://localhost:3001/api/v1/'
const baseTheaterUrl = 'http://localhost:3001/api/v1/theaters'
const baseSeasonUrl = 'http://localhost:3001/api/v1/seasons'
const baseShowUrl = 'http://localhost:3001/api/v1/shows'
const baseTryoutUrl = 'http://localhost:3001/api/v1/tryouts'
const baseAuditionUrl = 'http://localhost:3001/api/v1/auditions'
// const loginUrl = 'http://localhost:3001/api/v1/login'

function headers() {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: localStorage.getItem("token")
  };
}

const getOptions = {
  method: 'GET',
  headers: headers()
}

export const fetchReauthActor = () => {
  return fetch('http://localhost:3001/api/v1/reauth', getOptions)
  .then(resp => resp.json())
}

export const fetchLoginActor = (actor) => {
  return fetch(`${baseUrl}login`, postRequest({ actor }))
    .then(resp => resp.json())
      .then(resp => responseHandler(resp))
}

export const fetchAudition = (id) => {
  return fetch(`${baseAuditionUrl}/${id}`, getOptions).then(resp => resp.json())
}

export const fetchTryout = (id) => {
  return fetch(`${baseTryoutUrl}/${id}`, getOptions).then(resp => resp.json())
}

export const fetchShow = (id) => {
  return fetch(`${baseShowUrl}/${id}`, getOptions).then(resp => resp.json())
}

export const fetchSeasons = () => {
  return fetch(baseSeasonUrl, getOptions).then(resp => resp.json())
}


export const fetchSeason = (id) => {
  return fetch(`${baseSeasonUrl}/${id}`, getOptions).then(resp => resp.json())
}

export const fetchTheaters = () => {
  return fetch(baseTheaterUrl, getOptions).then(resp => resp.json())
}

export const fetchActor = (id) => {
  return fetch(`http://localhost:3001/api/v1/actors/${id}`, getOptions)
  .then(resp => resp.json())
}

export const fetchUpdateCurrentActor = (id, body) => {
  return fetch(`${baseActorUrl}/${id}`, patchRequest(body))
}

export const fetchGet = (route, id) => {
  return fetch(`${baseUrl}${route}/${id}`, getOptions).then(resp => resp.json())
}

export const fetchGetIndex = (route) => {
  return fetch(`${baseUrl}${route}`, getOptions).then(resp => resp.json())
}

export const fetchPostTryout = (body) => {

  return fetch(baseTryoutUrl, {
    method: 'POST',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
    body: body
  }).then(resp => resp.json())
}


export const fetchActorCreate = (actor) => {
  return fetch('http://localhost:3001/api/v1/actors', postRequest( actor ))
    .then(resp => resp.json())
}


function patchRequest(body) {
  return {
    method: 'PATCH',
    headers: headers(),
    body: JSON.stringify(body)
  }
}

function postRequest(body) {
  return {
    method: 'POST',
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




function responseHandler(response) {
  if (response.error) {
    return Promise.reject(response)
    .catch(response => {
      window.alert(response.error.message)
      return Promise.reject(response.error.message)
    })
  } else {
    return response
  }
}
