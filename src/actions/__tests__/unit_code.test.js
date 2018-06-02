import React from 'react'
import {
  FETCH_CODES,
  FETCH_CODE_BY_ID,
  ADD_CODE,
  EDIT_CODE,
  DELETE_CODE
} from '../types'
import { mount } from 'enzyme'
import { fetchCodes, fetchCodeById, deleteCode,
addCode, editCode }from '../Codes'

it('fetchCodes actions dispatch correct type', () => {
  const action = fetchCodes()
  expect(action.type).toEqual(FETCH_CODES)
})

it('fetchCodeById actions dispatch correct type', () => {
  const action = fetchCodeById(1)
  expect(action.type).toEqual(FETCH_CODE_BY_ID)
})

it('addCode actions should dispatch correct type', () => {
  const action = addCode({}, 0, () => {})
  expect(action.type).toEqual(ADD_CODE)
})

it('editCode actions should dispatch correct type', () => {
  const action = editCode({id: 1,
    values: { id: 1,
      codeName: "LUCKY ONE1",
      amountDiscount: 0.15,
      discountCodeType: "percent",
      limitPeople: 0 }},
    () => {})
  expect(action.type).toEqual(EDIT_CODE)
})

it('deleteCode actions should dispatch correct type', () => {
  const action = deleteCode(1)
  expect(action.type).toEqual(DELETE_CODE)
})
