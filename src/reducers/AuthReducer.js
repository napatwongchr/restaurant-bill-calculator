import {
  SELECT_ROLE
} from '../actions/types'

const INITIAL_STATE = {
  role: null
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ROLE:
      return {...state, role: action.payload}
    default:
      return state
  }
}
