const baseActorUrl = 'http://localhost:3001/api/v1/actors'
const baseUrl = 'http://localhost:3001/api/v1/'

export const fetchActor = (id) => {
  return fetch(`http://localhost:3001/api/v1/actors/${id}`)
  .then(resp => resp.json())
}

export const fetchUpdateCurrentActor = (id, body) => {
  return fetch(`${baseActorUrl}/${id}`, putRequest(body))
}

export const fetchGet = (route, id) => {
  return fetch(`${baseUrl}${route}/${id}`).then(resp => resp.json())
}

// export const fetchPost = (route) => {
//   return fetch(`${baseUrl}${route}`, {
//
//   }
//
//   ).then(resp => resp.json()).then(console.log)
// }



function putRequest(body) {
  return {
    method: 'PUT',
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
