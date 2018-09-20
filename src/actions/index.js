import { fetchActor } from '../adapters/actorAdapter'

export const SHOW_AUDITION = "SHOW_AUDITION"
export const LOAD_ACTOR = "LOAD_ACTOR"


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
