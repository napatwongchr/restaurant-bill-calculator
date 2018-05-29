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
      return { ...state, singleCode: fetchCodeById(state, action) }
    case ADD_CODE:
      return { ...state, codes: addCode(state, action) }
    case EDIT_CODE:
      return { ...state, codes: updateCode(state, action)}
    case DELETE_CODE:
      return { ...state, codes: deleteCode(state, action) }
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

const fetchCodeById = (state, action) => state.codes.find(code => code.id === action.payload)

const addCode = (state, action) => [...state.codes, action.payload]

const deleteCode = (state, action) => state.codes.filter(code => code.id !== action.payload)

const updateCode = (state, action) => {
  const codeIndex = state.codes.findIndex(code => code.id === action.payload.id)
  state.codes[codeIndex] = action.payload.values
  return state.codes
}
