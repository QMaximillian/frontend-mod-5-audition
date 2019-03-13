import { LOAD_INITIAL_ACTOR_STATE, EDIT_ACTOR, LOAD_AUDITION_JOURNALS, SET_AUDITIONS_INDEX, SET_CURRENT_AUDITION, SET_THEATERS_INDEX, SET_SEASONS_INDEX, SET_SEASON, SET_SHOW, SET_TRYOUT, SET_AUDITION } from '../actions/types'


export const initialState = {
    currentActor: {},
    currentAudition: {},
    tryouts: [],
    auditionJournals: [],
    newAuditionJournal: {},
    actorProfileForm: {},
    resumes: [],
    auditionIndex: [],
    theatersIndex: [],
    seasonsIndex: [],
    season: [],
    show: [],
    tryout: [],
    audition: {},
    auth: {}
  }


export const actorReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_INITIAL_ACTOR_STATE:
    return {
      ...state,
      currentActor: action.payload.currentActor,
      tryouts: action.payload.tryouts
    }

    case SET_AUDITION:
    console.log("Me", action.payload.audition)
    return {
      ...state,
      audition: action.payload.audition
    }

    case SET_SHOW:
    return {
      ...state,
      show: action.payload.show
    }

    case SET_TRYOUT:
    return {
      ...state,
      tryout: action.payload.tryout
    }

    case EDIT_ACTOR:
    console.log(state.currentActor)
    return {
      ...state,
        currentActor: {...state.currentActor,
        attributes: {
          ...state.currentActor.attributes,
          ...action.payload.currentActor
        }
      }
    }

    case SET_SEASON:
      return {
        ...state,
        season: action.payload.season
      }

    case LOAD_AUDITION_JOURNALS:
    return {
      ...state,
      auditionJournals: action.payload.auditionJournals
    }

    case SET_AUDITIONS_INDEX:
    return {
      ...state,
      auditionIndex: action.payload.auditionIndex
    }

    case SET_SEASONS_INDEX:
    return {
      ...state,
      seasonsIndex: action.payload.seasonsIndex
    }

    case SET_CURRENT_AUDITION:
    return {
      ...state,
      currentAudition: action.payload.currentAudition
    }

    case SET_THEATERS_INDEX:
    return {
      ...state,
      theatersIndex: action.payload.theatersIndex
    }
    default:
      return state
  }
}
