import { fetchActor, fetchGet, fetchGetIndex } from '../adapters/actorAdapter'
import { LOAD_INITIAL_ACTOR_STATE, LOAD_AUDITION_JOURNALS, SET_AUDITIONS_INDEX, SET_CURRENT_AUDITION } from './types'

// PUT MY AUDITIONS IN STORE
//PUT AUDITIONS IN STORE
//PUT RESUMES IN STORE
//PUT MY RESUMES IN STORE
//PUT MY AUDITION_JOURNALS IN STORE
//PUT MY APPLIED TRYOUTS IN STORE
//PUT MY TRYOUT AUDITIONS IN STORE
//PUT RESUMES IN STORE
//PUT MY DEFAULT RESUME IN STORE


export const loadInitialActorState = (actor) => {
  return (dispatch) => {
    fetchActor(actor.id).then(resp => {
      dispatch(setInitialState(resp.data))
    })
  }
}



export const setCurrentAudition
 = (audition) => {
   return {
     type: SET_CURRENT_AUDITION,
     payload: {
       currentAudition: audition
     }
   }
 }


export const loadAllAuditions = () => {
  return (dispatch) => {
    fetchGetIndex('auditions').then(resp => {
      dispatch(setAuditionsIndex(resp.data))
    })
  }
}

export const setAuditionsIndex = (auditions) => {
  return {
    type: SET_AUDITIONS_INDEX,
    payload: {
      auditionIndex: auditions
    }
  }
}


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

export const setInitialState = (actor) => {
  return {
    type: LOAD_INITIAL_ACTOR_STATE,
    payload: {
      currentActor: actor,
      appliedAuditions: actor.attributes.applied_auditions,
      resumes: actor.attributes.resumes,
      tryoutAuditions: actor.attributes.tryout_auditions,
      auditionJournals: actor.attributes.audition_journals,
      tryouts: actor.attributes.tryouts
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
