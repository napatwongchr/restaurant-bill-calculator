import { data } from '../data/PromotionCodes.json'
import { calculateBillTotal } from './Table'
import {
  FETCH_CODES,
  APPLY_CODE,
  REMOVE_CODE
} from './types'

export const fetchCodes = () => {
  return { type: FETCH_CODES, payload: data}
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
