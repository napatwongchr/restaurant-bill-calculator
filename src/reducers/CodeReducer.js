import {
  FETCH_CODES,
  APPLY_CODE,
  REMOVE_CODE,
  GET_CODE_CASES
} from '../actions/types'

const INITIAL_STATE = {
  codes: null,
  codeCases: null,
  appliedCode: null
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CODES:
      return {...state, codes: action.payload}
    case APPLY_CODE:
      return {...state, appliedCode: action.payload}
    case REMOVE_CODE:
      return { ...state, appliedCode: null}
    case GET_CODE_CASES:
      return {...state, codeCases: action.payload}
    default:
      return state
  }
}
