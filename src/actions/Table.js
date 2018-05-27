import TableData from '../data/Tables.json'
import {
  FETCH_TABLE,
  FETCH_TABLE_BY_ID,
  CALCULATE_BILL_TOTAL,
  CALCULATE_BILL_SUBTOTAL,
  CALCULATE_EXCHANGE,
  APPLY_CODE,
  REMOVE_CODE
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
  let exchange = 0
  recieve.length !== 0 ? exchange = recieve - total : exchange = 0
  return { type: CALCULATE_EXCHANGE, payload: exchange }
}

const calculateBillTotal = (items, codes = null, dispatch) => {
  let total = 0
  items.map(item => total = total + (item.quantity * item.price))
  dispatch({ type: CALCULATE_BILL_SUBTOTAL, payload: total})

  if(codes === 'LUCKY ONE') {
    total = total - (total * 0.15)
    dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
  } else if(codes === 'LUCKY TWO') {
    total = total - (total * 0.20)
    dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
  } else if(codes === '4PAY3') {
    total = total - 459
    dispatch({ type: CALCULATE_BILL_TOTAL, payload: total })
  } else {
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

export const applyCode = (items, codes, callback) => {
  return dispatch => {
    calculateBillTotal(items, codes, dispatch)
    dispatch({ type: APPLY_CODE, payload: codes })
    callback()
  }
}

export const removeCode = (items) => {
  return dispatch => {
    dispatch({ type: REMOVE_CODE })
    calculateBillTotal(items, null, dispatch)
  }
}
