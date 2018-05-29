import {
  FETCH_CODES,
  FETCH_CODE_BY_ID,
  APPLY_CODE,
  ADD_CODE,
  DELETE_CODE,
  EDIT_CODE,
  REMOVE_CODE_FROM_BILL,
  GET_CODE_CASES
} from '../actions/types'

const INITIAL_STATE = {
  codes: null,
  singleCode: {},
  codeCases: null,
  appliedCode: null
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CODES:
      return { ...state, codes: action.payload }
    case FETCH_CODE_BY_ID:
      const code = state.codes.find(code => code.id === action.payload)
      return { ...state, singleCode: code }
    case ADD_CODE:
      return { ...state, codes: [...state.codes, action.payload] }
    case EDIT_CODE:
      const codeIndex = state.codes.findIndex(code => code.id === action.payload.id)
      state.codes[codeIndex] = action.payload.values
      return { ...state, codes: state.codes}
    case DELETE_CODE:
      const newCodesArray = state.codes.filter(code => code.id !== action.payload)
      return { ...state, codes: newCodesArray }
    case APPLY_CODE:
      return { ...state, appliedCode: action.payload }
    case REMOVE_CODE_FROM_BILL:
      return { ...state, appliedCode: null}
    case GET_CODE_CASES:
      return { ...state, codeCases: action.payload }
    default:
      return state
  }
}
