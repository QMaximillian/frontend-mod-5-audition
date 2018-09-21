import { LOAD_ACTOR, UPDATE_RESUME_FORM } from '../actions/types'

// export const initialState = {
//
// }
export const initialState = {
    currentActor: {},
    confirmedAuditions: [],
    auditionJournals: [],
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
      actorProfileForm: action.payload.currentActor
    }

    case UPDATE_RESUME_FORM:
    return {

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
