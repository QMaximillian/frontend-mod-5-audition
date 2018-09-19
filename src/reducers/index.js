import { SHOW_AUDITION, LOAD_ACTOR } from '../actions'


export const initialState = {
    currentActor: {},
    confirmedAuditions: [],
    auditionJournals: []
  }

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case LOAD_ACTOR:
    return {
      ...state,
      currentActor: {}
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
