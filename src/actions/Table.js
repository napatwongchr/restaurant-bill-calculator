import TableData from '../data/Tables.json'
import {
  FETCH_TABLE,
  FETCH_TABLE_BY_ID,
  CALCULATE_BILL_TOTAL
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
    calculateBillTotal(table, null, dispatch)
    dispatch({ type: FETCH_TABLE_BY_ID, payload: table })
  }
}

export const calculateBillTotal = (table, codes = null, dispatch) => {
  let total = 0
  if(!codes) {
    table.items.map(item => {
      total = total + (item.quantity * item.price)
    })
  }
  dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
}
