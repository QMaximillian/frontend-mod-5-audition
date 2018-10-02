import { LOAD_INITIAL_ACTOR_STATE, EDIT_ACTOR, LOAD_AUDITION_JOURNALS, SET_AUDITIONS_INDEX, SET_CURRENT_AUDITION, SET_THEATERS_INDEX} from '../actions/types'

// export const initialState = {
//
// }
export const initialState = {
    currentActor: {},
    currentAudition: {},
    tryouts: [],
    auditionJournals: [],
    newAuditionJournal: {},
    actorProfileForm: {},
    resumes: [],
    auditionIndex: [],
    theatersIndex: []
  }

// export const formInitialState = {
//     name: {}
// }

export const actorReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_INITIAL_ACTOR_STATE:
    return {
      ...state,
      currentActor: action.payload.currentActor,
      appliedAuditions: action.payload.appliedAuditions,
      tryoutAuditions: action.payload.tryoutAuditions,
      resumes: action.payload.resumes,
      auditionJournals: action.payload.auditionJournals,
      tryouts: action.payload.tryouts
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

    // case SHOW_AUDITION:
    // return {
    //   ...state,
    //   confirmedAuditions:
    // }
    default:
      return state
  }
}

// export const formReducer = (state = formInitialState, action) => {
//   switch(action.type) {
//     case "SUBMIT_FORM":
//     return {
//       ...state,
//       name: action.payload
//
//     }
//   }
// }
