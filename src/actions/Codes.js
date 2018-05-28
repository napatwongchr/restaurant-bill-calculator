import { data } from '../data/PromotionCodes.json'
import { calculateBillTotal } from './Table'
import {
  FETCH_CODES,
  ADD_CODE,
  REMOVE_CODE,
  EDIT_CODE,
  REMOVE_CODE_FROM_BILL
} from './types'

export const fetchCodes = () => {
  return { type: FETCH_CODES, payload: data}
}

export const addCode = (values) => {
  return { type: ADD_CODE }
}

export const editCode = (values) => {
  return { type: EDIT_CODE }
}

export const removeCode = (values) => {
return { type: REMOVE_CODE }
}

export const applyCode = (items, codes, callback) => {
  return dispatch => {
    calculateBillTotal(items, codes, true, dispatch)
    callback()
  }
}

export const removeCodeFromBill = (items) => {
  return dispatch => {
    dispatch({ type: REMOVE_CODE_FROM_BILL })
    calculateBillTotal(items, null, false, dispatch)
  }
}
