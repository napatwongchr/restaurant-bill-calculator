import {
  FETCH_CODES,
  APPLY_CODE,
  ADD_CODE,
  DELETE_CODE,
  REMOVE_CODE_FROM_BILL,
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
    case ADD_CODE:
      return {...state, codes: [...state.codes, action.payload]}
    case DELETE_CODE:
      let newCodesArray = state.codes.filter(code => code.id !== action.payload)
      return { ...state, codes: newCodesArray }
    case APPLY_CODE:
      return {...state, appliedCode: action.payload}
    case REMOVE_CODE_FROM_BILL:
      return { ...state, appliedCode: null}
    case GET_CODE_CASES:
      return {...state, codeCases: action.payload}
    default:
      return state
  }
}
