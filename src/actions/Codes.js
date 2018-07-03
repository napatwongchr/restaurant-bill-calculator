import { data } from '../data/DiscountCodes.json'
import { calculateBillTotal } from './Table'
import {
  FETCH_CODES,
  FETCH_CODE_BY_ID,
  ADD_CODE,
  DELETE_CODE,
  EDIT_CODE,
  CLEAR_SELECTED_CODE,
  REMOVE_CODE_FROM_BILL
} from './types'

export const fetchCodes = () => {
  return { type: FETCH_CODES, payload: data }
}

export const fetchCodeById = id => {
  return { type: FETCH_CODE_BY_ID, payload: id }
}

export const addCode = (values, collectionLength, callback) => {
  const codeData = { id: collectionLength + 1, ...values }
  callback()
  return { type: ADD_CODE, payload: codeData }
}

export const editCode = (data, callback) => {
  callback()
  return { type: EDIT_CODE, payload: data }
}

export const deleteCode = id => {
  return { type: DELETE_CODE, payload: id }
}

export const applyCode = (table, selectedCode, allCodes, callback) => {
  return dispatch => {
    dispatch({ type: CLEAR_SELECTED_CODE })
    calculateBillTotal(
      table,
      selectedCode.discountCode,
      allCodes,
      true,
      dispatch
    )
    callback()
  }
}

export const removeCodeFromBill = (table, codes) => {
  return dispatch => {
    dispatch({ type: CLEAR_SELECTED_CODE })
    dispatch({ type: REMOVE_CODE_FROM_BILL })
    calculateBillTotal(table, null, codes, false, dispatch)
  }
}
