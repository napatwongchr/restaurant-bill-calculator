import {
  FETCH_TABLE,
  FETCH_TABLE_BY_ID,
  CALCULATE_BILL_TOTAL
} from '../actions/types'

const INITIAL_STATE = {
  tables: null,
  singleTable: null,
  billTotal: 0,
  codes: null
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TABLE:
      return { ...state, tables: action.payload }
    case FETCH_TABLE_BY_ID:
      return { ...state, singleTable: action.payload }
    case CALCULATE_BILL_TOTAL:
      return { ...state, billTotal: action.payload }
    default:
      return state
  }
}
