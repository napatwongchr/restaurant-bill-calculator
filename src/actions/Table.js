import TableData from '../data/Tables.json'
import {
  FETCH_TABLE,
  FETCH_TABLE_BY_ID,
  CALCULATE_BILL_TOTAL,
  CALCULATE_BILL_SUBTOTAL,
  CALCULATE_EXCHANGE,
  APPLY_CODE
} from './types'

export const fetchTable = () => {
  return {
    type: FETCH_TABLE,
    payload: TableData.data
  }
}

export const fetchTableById = (id) => {
  const tables = TableData.data
  const table = tables.find(table => {
    return table.id === id
  })
  return dispatch => {
    calculateBillTotal(table.items, null, dispatch)
    dispatch({ type: FETCH_TABLE_BY_ID, payload: table })
  }
}

export const calculateExchange = (total, recieve) => {
  const exchange = recieve - total
  return {
    type: CALCULATE_EXCHANGE,
    payload: exchange
  }
}

export const calculateBillTotal = (items, codes = null, dispatch) => {
  let total = 0
  items.map(item => total = total + (item.quantity * item.price))
  dispatch({ type: CALCULATE_BILL_SUBTOTAL, payload: total})
  switch (codes) {
    case 'LUCKY ONE':
      total = total - (total * 0.15)
      dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
    case 'LUCKY TWO':
      total = total - (total * 0.20)
      dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
    case '4PAY3':
      total = total - 459
      dispatch({ type: CALCULATE_BILL_TOTAL, payload: total })
    default:
      if (total > 6000) {
        total = total - (total * 0.25)
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
      } else if (total > 1000) {
        total = total - (total * 0.15)
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
      }
      dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
  }
}

export const applyCode = (codes) => {

}
