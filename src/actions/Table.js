import { data } from '../data/Tables.json'
import {
  FETCH_TABLE,
  FETCH_TABLE_BY_ID,
  CALCULATE_BILL_TOTAL,
  CALCULATE_BILL_SUBTOTAL,
  CALCULATE_EXCHANGE,
  APPLY_CODE,
  CODE_6000,
  CODE_1000,
  CODE_LUCKYTWO,
  CODE_LUCKYONE,
  CODE_4PAY3
} from './types'

export const fetchTable = () => {
  return {
    type: FETCH_TABLE,
    payload: data
  }
}

export const fetchTableById = (id, code) => {
  const table = data.find(table => table.id === id)
  return dispatch => {
    calculateBillTotal(table.items, code, true, dispatch)
    dispatch({ type: FETCH_TABLE_BY_ID, payload: table })
  }
}

export const calculateExchange = (total, recieve) => {
  let exchange = 0
  recieve.length !== 0 ? exchange = recieve - total : exchange = 0
  // exchange < 0 ? exchange = 0 : exchange = recieve - total
  return { type: CALCULATE_EXCHANGE, payload: exchange }
}

export const calculateBillTotal = (items, codes, promotion, dispatch) => {
  let total = 0

  items.map(item => total = total + (item.quantity * item.price))
  dispatch({ type: CALCULATE_BILL_SUBTOTAL, payload: total})

  if (promotion) {
    if (codes) {
      const discountItems = generateDiscountItems(total, codes)
      const minPriceItem = findMinPrice(discountItems)
      dispatch({ type: CALCULATE_BILL_TOTAL, payload: minPriceItem.price})
      dispatch({ type: APPLY_CODE, payload: minPriceItem.code })
    } else {
      if (total > 6000) {
        total = total - (total * 0.25)
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
        dispatch({ type: APPLY_CODE, payload: CODE_6000 })
      } else if (total > 1000) {
        total = total - (total * 0.15)
        dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
        dispatch({ type: APPLY_CODE, payload: CODE_1000 })
      }
      dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
    }
  } else {
    dispatch({ type: CALCULATE_BILL_TOTAL, payload: total})
  }
}

const findMinPrice = (items) => {
  let minPriceItem = {}
  for (let item of items) {
    if (Object.keys(minPriceItem).length === 0) {
      minPriceItem = item
    } else {
      if (item.price < minPriceItem.price) {
        minPriceItem = item
      }
    }
  }
  return minPriceItem
}

const generateDiscountItems = (total, codes) => {
  let discountItems = []

  if(total > 6000) {
    let calculatedTotal = total - (total * 0.25)
    discountItems.push({ code: CODE_6000, price: calculatedTotal })
  }

  if(total > 1000) {
    let calculatedTotal = total - (total * 0.15)
    discountItems.push({ code: CODE_1000, price: calculatedTotal})
  }

  if(codes === 'LUCKY ONE') {
    let calculatedTotal = total - (total * 0.15)
    discountItems.push({ code: CODE_LUCKYONE, price: calculatedTotal})
  }

  if(codes === 'LUCKY TWO') {
    let calculatedTotal = total - (total * 0.20)
    discountItems.push({ code: CODE_LUCKYTWO, price: calculatedTotal})
  }

  if(codes === '4PAY3') {
    let calculatedTotal = total - 459
    discountItems.push({ code: CODE_4PAY3, price: calculatedTotal})
  }
  return discountItems
}
