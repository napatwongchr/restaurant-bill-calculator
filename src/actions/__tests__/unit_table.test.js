import React from 'react'
import DiscountCodes from '../../data/DiscountCodes'
import Tables from '../../data/Tables'
import { FETCH_TABLE, FETCH_TABLE_BY_ID, CALCULATE_EXCHANGE } from '../types'
import { fetchTable, fetchTableById, calculateExchange,
findMinPrice, generateDiscountItems } from '../Table'

it('fetchTable actions dispatch correct type', () => {
    const action = fetchTable()
    expect(action.type).toEqual(FETCH_TABLE)
})


it('calculateExchange actions dispatch correct type', () => {
  const action = calculateExchange(1500, 2000)
  expect(action.type).toEqual(CALCULATE_EXCHANGE)
})

it('calculateExchange actions should calculate exchange correctly', () => {
  const action = calculateExchange(1500, 2000)
  expect(action.payload).toEqual(500)
})

it('generateDiscountItems can be able to calculate price for each discount code', () => {
  const discountItems = generateDiscountItems(5000, DiscountCodes.data)
  expect(discountItems).toBeTruthy()
})

it('findMinPrice select the best discount price', () => {
  const discountItems = generateDiscountItems(5000, DiscountCodes.data)
  const expectedMinPrice = discountItems[3]
  const minPriceItem = findMinPrice(discountItems, 2)
  expect(JSON.stringify(minPriceItem)).toEqual(JSON.stringify(expectedMinPrice))
})
