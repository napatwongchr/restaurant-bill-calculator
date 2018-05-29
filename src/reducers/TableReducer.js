import {
  FETCH_TABLE,
  FETCH_TABLE_BY_ID,
  CALCULATE_BILL_TOTAL,
  CALCULATE_BILL_SUBTOTAL,
  CALCULATE_EXCHANGE
} from '../actions/types'

const INITIAL_STATE = {
  tables: null,
  singleTable: null,
  billTotal: 0,
  subTotal: 0,
  exchange: 0
}

export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TABLE:
      return { ...state, tables: action.payload }
    case FETCH_TABLE_BY_ID:
      return { ...state, singleTable: action.payload }
    case CALCULATE_BILL_TOTAL:
      return { ...state, billTotal: action.payload }
    case CALCULATE_BILL_SUBTOTAL:
      return { ...state, subTotal: action.payload }
    case CALCULATE_EXCHANGE:
      return { ...state, exchange: action.payload }
    default:
      return state
  }
}
