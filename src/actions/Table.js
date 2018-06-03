import { data } from '../data/Tables.json'
import {
  FETCH_TABLE,
  FETCH_TABLE_BY_ID,
  CLEAR_SELECTED_CODE,
  REMOVE_CODE_FROM_BILL,
  SELECTED_CODE,
  RESET_EXCHANGE,
  CALCULATE_BILL_TOTAL,
  CALCULATE_BILL_SUBTOTAL,
  CALCULATE_EXCHANGE,
  APPLY_CODE
} from './types'

export const fetchTable = () => {
  return {
    type: FETCH_TABLE,
    payload: data
  }
}

export const fetchTableById = (id, allCodes) => {
  const table = data.find(table => table.id === id)
  return dispatch => {
    dispatch({ type: CLEAR_SELECTED_CODE })
    dispatch({ type: REMOVE_CODE_FROM_BILL })
    dispatch({ type: RESET_EXCHANGE })
    dispatch({ type: FETCH_TABLE_BY_ID, payload: table })
    calculateBillTotal(table, null, allCodes, true, dispatch)
  }
}

export const calculateExchange = (total, recieve) => {
  let exchange = 0
  recieve.length !== 0 ? exchange = recieve - total : exchange = 0
  return { type: CALCULATE_EXCHANGE, payload: exchange }
}

export const calculateBillTotal = (table, selectedCode, allCodes, promotion, dispatch) => {
  let total = 0
  table.items.map(item => total = total + (item.quantity * item.price))

  dispatch({ type: CALCULATE_BILL_SUBTOTAL, payload: total})

  if (promotion) {
    if (selectedCode) {
      const discountItems = generateDiscountItems(total, allCodes)
      const minPriceItem = findMinPrice(discountItems, table.people)
      if(minPriceItem.codeName !== selectedCode) {
        dispatch({ type: SELECTED_CODE, payload: selectedCode })
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: minPriceItem.price })
        dispatch({ type: APPLY_CODE, payload: minPriceItem.codeName })
      } else {
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: minPriceItem.price })
        dispatch({ type: APPLY_CODE, payload: minPriceItem.codeName })
      }
    } else {
      if (total > 6000) {
        total = total - (total * 0.25)
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
        dispatch({ type: APPLY_CODE, payload: 'CODE_6000' })
      } else if (total > 1000) {
        total = total - (total * 0.15)
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
        dispatch({ type: APPLY_CODE, payload: 'LUCKY ONE' })
      }
      dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
    }
  } else {
    dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
  }
}

export const findMinPrice = (items, condition) => {
  let minPriceItem = {}
  for (let item of items) {
    if (Object.keys(minPriceItem).length === 0) {
      minPriceItem = item
    } else {
      if (!item.limitPeople) {
        if (item.price < minPriceItem.price) {
          minPriceItem = item
        }
      } else {
        if (item.price < minPriceItem.price && item.limitPeople === condition) {
          minPriceItem = item
        }
      }
    }
  }
  return minPriceItem
}

export const generateDiscountItems = (total, allCodes) => {
  let discountItems = []

  if(total > 6000) {
    let calculatedTotal = total - (total * 0.25)
    discountItems.push({ codeName: 'CODE_6000', price: calculatedTotal })
  }

  if(total > 1000) {
    let calculatedTotal = total - (total * 0.15)
    discountItems.push({ codeName: 'LUCKY ONE', price: calculatedTotal})
  }

  for(let code of allCodes) {
    if(code.discountCodeType === 'fixed') {
      let calculatedTotal = total - code.amountDiscount
      discountItems.push({ ...code, price: calculatedTotal})
    } else if(code.discountCodeType === 'percent') {
      let calculatedTotal = total - (total * code.amountDiscount)
      discountItems.push({ ...code, price: calculatedTotal})
    }
  }

  return discountItems
}
