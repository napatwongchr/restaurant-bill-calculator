import {
  FETCH_CODES
} from '../actions/types'

const INITIAL_STATE = {
  codes: null
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CODES:
      return {...state, codes: action.payload}
    default:
      return state
  }
}
