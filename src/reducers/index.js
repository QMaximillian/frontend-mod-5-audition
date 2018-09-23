import { LOAD_ACTOR, UPDATE_CURRENT_ACTOR_INFO, EDIT_ACTOR, LOAD_AUDITION_JOURNALS } from '../actions/types'

// export const initialState = {
//
// }
export const initialState = {
    currentActor: {},
    confirmedAuditions: [],
    auditionJournals: [],
    newAuditionJournal : {},
    actorProfileForm: {
    },
    resumeFormData: {

    }
  }

// export const formInitialState = {
//     name: {}
// }

export const actorReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_ACTOR:
    return {
      ...state,
      currentActor: action.payload.currentActor,

    }

    // case UPDATE_CURRENT_ACTOR_INFO:
    // return {
    //     ...state,
    //     currentActor: {...state.currentActor, ...action.payload.currentActor }
    // }

    case EDIT_ACTOR:
    console.log(state.currentActor)
    return {
      ...state,
      currentActor: {...state.currentActor, ...action.payload.currentActor}
    }

    case LOAD_AUDITION_JOURNALS:
    return {
      ...state,
      auditionJournals: action.payload.auditionJournals
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
