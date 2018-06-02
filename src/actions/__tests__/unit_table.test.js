import React from 'react'
import DiscountCodes from '../../data/DiscountCodes'
import Tables from '../../data/Tables'
import { FETCH_TABLE, FETCH_TABLE_BY_ID, CALCULATE_EXCHANGE } from '../types'
import { fetchTable, fetchTableById, calculateExchange } from '../Table'

it('fetchTable actions dispatch correct type', () => {
    const action = fetchTable()
    expect(action.type).toEqual(FETCH_TABLE)
})

it('fetchTableById actions dispatch correct type', () => {
})

it('calculateExchange actions dispatch correct type', () => {
  const action = calculateExchange(1500, 2000)
  expect(action.type).toEqual(CALCULATE_EXCHANGE)
})

it('calculateExchange actions should calculate correctly', () => {
  const action = calculateExchange(1500, 2000)
  expect(action.payload).toEqual(500)
})
