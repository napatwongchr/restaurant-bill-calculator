import React from 'react'
import DiscountCodes from '../../data/DiscountCodes'
import Tables from '../../data/Tables'
import { FETCH_TABLE, FETCH_TABLE_BY_ID } from '../types'
import { fetchTable, fetchTableById } from '../Table'

it('fetchTable actions dispatch correct type', () => {
    const action = fetchTable()
    expect(action.type).toEqual(FETCH_TABLE)
})

it('fetchTableById actions dispatch correct type', () => {
})

it('calculateExchange actions dispatch correct type', () => {

})
