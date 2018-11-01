import { fetchActor, fetchShow, fetchGet, fetchGetIndex, fetchTheaters, fetchSeasons, fetchSeason, fetchTryout, fetchAudition } from '../adapters/actorAdapter'
import { LOAD_INITIAL_ACTOR_STATE, LOAD_AUDITION_JOURNALS, SET_AUDITIONS_INDEX, SET_CURRENT_AUDITION, SET_THEATERS_INDEX, SET_SEASONS_INDEX, SET_SEASON, SET_SHOW, SET_TRYOUT, SET_AUDITION, EDIT_ACTOR, CREATE_JOURNAL } from './types'


// PUT MY AUDITIONS IN STORE
//PUT AUDITIONS IN STORE
//PUT RESUMES IN STORE
//PUT MY RESUMES IN STORE
//PUT MY AUDITION_JOURNALS IN STORE
//PUT MY APPLIED TRYOUTS IN STORE
//PUT MY TRYOUT AUDITIONS IN STORE
//PUT RESUMES IN STORE
//PUT MY DEFAULT RESUME IN STORE


export const loadSeasons = () => {
  return (dispatch) => {
    fetchSeasons().then(resp => {
      dispatch(setSeasons(resp.data))
    })
  }
}

export const loadShow = (id) => {
  return (dispatch) => {
    fetchShow(id).then(resp => {
      dispatch(setShow(resp.data))
    })
  }
}

export const loadTryout = (id) => {
  return (dispatch) => {
    fetchTryout(id).then(resp => {
      dispatch(setTryout(resp.data))
    })
  }
}

export const setTryout = (tryout) => {
  return {
    type: SET_TRYOUT,
    payload: {
      tryout: tryout
    }
  }
}

export const setShow = (show) => {
  return  {
    type: SET_SHOW,
    payload: {
      show: show
    }
  }
}

export const loadSeason = (id) => {
  return (dispatch) => {
    fetchSeason(id).then(resp => {
      dispatch(setSeason(resp.data))
    })
  }
}

export const setSeason = (season) => {
  return {
    type: SET_SEASON,
    payload: {
      season: season
    }
  }
}


export const setSeasons = (seasons) => {
  return {
    type: SET_SEASONS_INDEX,
    payload: {
      seasonsIndex: seasons
    }
  }
}



export const loadTheaters = () => {
    return (dispatch) => {
      fetchTheaters().then(resp => {
        dispatch(setTheaters(resp.data))
      })
    }
}

export const setTheaters = (theaters) => {
  return {
    type: SET_THEATERS_INDEX,
    payload: {
        theatersIndex: theaters
    }
  }
}

export const loadInitialActorState = () => {
  return (dispatch) => {
    fetchActor(1).then(resp => {
      dispatch(setInitialState(resp.data))
    })
  }
}




export const setCurrentAudition = (audition) => {
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

export const loadAudition = (id) => {
  return (dispatch) => {
    fetchAudition(id).then(resp => {
      dispatch(setAudition(resp.data))
    })
  }
}

export const setAudition = (audition) => {
  return {
    type: SET_AUDITION,
    payload: {
      audition: audition
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
      tryouts: actor.attributes.tryouts
    }
  }
}




export const updateCurrentActorForm = (currentActor) => {
  console.log(currentActor);
  return {
    type: EDIT_ACTOR,
    payload: {
      currentActor
    }
  }
}

export const createAuditionJournal = (text) => {
  return {
    type: CREATE_JOURNAL,
    payload: {
      text
    }
  }
}
