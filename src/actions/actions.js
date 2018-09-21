import { fetchActor } from '../adapters/actorAdapter'
import { LOAD_ACTOR, UPDATE_RESUME_FORM } from './types'



export const loadActor = () => {
  return (dispatch) => {
    fetchActor().then(resp => {
      dispatch(setActor(resp.data.attributes))
    })
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

export const updateResumeForm = (actor, event) => {
  return {
    type: UPDATE_RESUME_FORM,
    payload: {
      currentActor: {
          first_name: event.target.value
      }
    }
  }
}
