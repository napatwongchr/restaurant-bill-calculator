import {
  FETCH_TABLE, FETCH_TABLE_BY_ID, CALCULATE_BILL_TOTAL,
  CALCULATE_BILL_SUBTOTAL, CALCULATE_EXCHANGE, RESET_EXCHANGE
} from '../../actions/types'
import tableReducer from '../TableReducer'
import { data } from '../../data/Tables'

const INITIAL_STATE = {
  tables: null,
  singleTable: null,
  billTotal: 0,
  subTotal: 0,
  exchange: 0
}

it('handle fetch table action', () => {
  const action = { type: FETCH_TABLE, payload: data }
  const state = INITIAL_STATE
  const resultState = tableReducer(state, action)
  expect(resultState.tables).toEqual(data)
})
