import {
  FETCH_CODES, FETCH_CODE_BY_ID, APPLY_CODE,
  SELECTED_CODE, ADD_CODE, DELETE_CODE,
  EDIT_CODE, REMOVE_CODE_FROM_BILL, CLEAR_SELECTED_CODE
} from '../../actions/types'
import { data } from '../../data/DiscountCodes.json'
import codeReducer from '../CodeReducer'

const INITIAL_STATE = {
  codes: null,
  singleCode: {},
  selectedCode: null,
  appliedCode: null
}

it('handles fetch codes action', () => {
  const action = { type: FETCH_CODES, payload:data }
  const state = INITIAL_STATE
  const resultState = codeReducer(state, action)
  expect(resultState.codes).toEqual(data)
})

it('handles fetch code by id', () => {
  const fetchCodeId = 1
  const action = { type: FETCH_CODE_BY_ID, payload: fetchCodeId }
  const state = { ...INITIAL_STATE, codes: data }
  const resultState = codeReducer(state, action)
  expect(resultState.singleCode.id).toEqual(fetchCodeId)
})

it('handles add code', () => {
  const action = { type: ADD_CODE, payload: {}}
  const state = { ...INITIAL_STATE, codes: data }
  const resultState = codeReducer(state, action)
  expect(resultState.codes.length).toEqual(4)
})

it('handle edit code', () => {
  const action =  { type: EDIT_CODE, payload: { id: 1, values: { id: 1, limitPeople: 10 } } }
  const state = { ...INITIAL_STATE, codes: data }
  const resultState = codeReducer(state, action)
  expect(resultState.codes[0].limitPeople).toEqual(10)
})

it('handle delete code', () => {
  const action = { type: DELETE_CODE, payload: 1 }
  const state = { ...INITIAL_STATE, codes: data }
  const resultState = codeReducer(state, action)
  expect(resultState.codes.length).toEqual(2)
})
