const baseActorUrl = 'http://localhost:3001/api/v1/actors'
const baseUrl = 'http://localhost:3001/api/v1/'
const baseTheaterUrl = 'http://localhost:3001/api/v1/theaters'
const baseSeasonUrl = 'http://localhost:3001/api/v1/seasons'
const baseShowUrl = 'http://localhost:3001/api/v1/shows'
const baseTryoutUrl = 'http://localhost:3001/api/v1/tryouts'
const baseAuditionUrl = 'http://localhost:3001/api/v1/auditions'
// const loginUrl = 'http://localhost:3001/api/v1/login'

export const fetchReauthActor = () => {
  return fetch('http://localhost:3001/api/v1/reauth',
    {
      method: 'GET',
      headers: headers()
    }
  )
  .then(resp => resp.json())
}

export const fetchLoginActor = (actor) => {
  return fetch(`${baseUrl}login`, {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({ actor })
  }).then(resp => resp.json()).then(resp => responseHandler(resp))
}

export const fetchAudition = (id) => {
  return fetch(`${baseAuditionUrl}/${id}`, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchTryout = (id) => {
  return fetch(`${baseTryoutUrl}/${id}`, {
      method: 'GET',
      headers: headers()
  }).then(resp => resp.json())
}

export const fetchShow = (id) => {
  return fetch(`${baseShowUrl}/${id}`, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchSeasons = () => {
  return fetch(baseSeasonUrl, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}


export const fetchSeason = (id) => {
  return fetch(`${baseSeasonUrl}/${id}`, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchTheaters = () => {
  return fetch(baseTheaterUrl, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchActor = (id) => {
  return fetch(`http://localhost:3001/api/v1/actors/${id}`, {
    method: 'GET',
    headers: headers()
  })
  .then(resp => resp.json())
}

export const fetchUpdateCurrentActor = (id, body) => {
  return fetch(`${baseActorUrl}/${id}`, patchRequest(body))
}

export const fetchGet = (route, id) => {
  return fetch(`${baseUrl}${route}/${id}`, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchGetIndex = (route) => {
  return fetch(`${baseUrl}${route}`, {
    method: 'GET',
    headers: headers()
  }).then(resp => resp.json())
}

export const fetchPostTryout = (body) => {
  return fetch(baseTryoutUrl, {
    method: 'POST',
    headers: {
      "Content-Type": "application/pdf",
      Authorization: localStorage.getItem('token'),
    },
    body: body
  }).then(resp => resp.json())
}


export const fetchActorCreate = (firstName, lastName, email, password) => {
  return fetch('http://localhost:3001/api/v1/actors', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    },
    body: JSON.stringify({
      actor: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      }
    })
})
.then(r => r.json())
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
    Accept: "application/json",
    Authorization: localStorage.getItem('token')
  }
}


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
