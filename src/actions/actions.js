import { fetchActor, fetchGet } from '../adapters/actorAdapter'
import { LOAD_ACTOR, LOAD_AUDITION_JOURNALS } from './types'



export const loadActor = () => {
  return (dispatch) => {
    fetchActor('1').then(resp => {
      dispatch(setActor(resp.data))
    })
  }
}

// export const loadAuditions = () => {
//   return (dispatch) => {
//     // fetchAuditions('http://localhost:3001/api/v1/auditions').then(resp => resp.json()).then(auditions => setAuditions())
//   }
// }

export const loadAuditionJournals = () => {
  return (dispatch) => {
    fetchGet('actors', 1).then(resp => {
      dispatch(setAuditionJournals(resp.data.attributes.audition_journals))
    })
  }
}

export const setAuditionJournals = (auditionJournals) => {
  return {
    type: LOAD_AUDITION_JOURNALS,
    payload: {
      auditionJournals: auditionJournals
    }
  }
}

export const setActor = (actor) => {
  return {
    type: LOAD_ACTOR,
    payload: {
      currentActor: actor
    }
  }
}




export const updateCurrentActorForm = (currentActor) => {
  console.log(currentActor);
  return {
    type: "EDIT_ACTOR",
    payload: {
      currentActor
    }
  }
}

export const createAuditionJournal = (text) => {
  return {
    type: "CREATE_JOURNAL",
    payload: {
      text
    }
  }
}
