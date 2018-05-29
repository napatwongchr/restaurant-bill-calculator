import { data } from '../data/DiscountCodes.json'
import { calculateBillTotal } from './Table'
import {
  FETCH_CODES,
  ADD_CODE,
  DELETE_CODE,
  EDIT_CODE,
  REMOVE_CODE_FROM_BILL
} from './types'

export const fetchCodes = () => {
  return { type: FETCH_CODES, payload: data}
}

export const addCode = (values, collectionLength, callback) => {
  const codeData = {}
  const { codeName, amountDiscount, discountCodeType, limitPeople } = values
  codeData.id = collectionLength + 1
  codeData.codeName = codeName
  codeData.amountDiscount = +amountDiscount
  codeData.discountCodeType = discountCodeType
  codeData.limitPeople = +limitPeople
  callback()
  return { type: ADD_CODE, payload: codeData }
}

export const editCode = (id, values, callback) => {
  return { type: EDIT_CODE }
}

export const deleteCode = (id) => {
  return { type: DELETE_CODE, payload: id }
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
