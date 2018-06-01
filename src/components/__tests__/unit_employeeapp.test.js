import React from 'react'
import { mount, shallow } from 'enzyme'
import RootWithoutPersists from '../../RootWithoutPersists'

import EmployeeApp from '../EmployeeApp'

let component

beforeEach(() => {
  const initialState = {
                          table: {
                            tables: [{
                                "id": 1,
                                "type": "COUNTER",
                                "capacity": 1,
                                "people": 1,
                                "items": [
                                  {
                                    "name": "Buffet",
                                    "quantity": 1,
                                    "price": 459
                                  }
                                ]
                              }]
                          }
                      }
  component = mount(<RootWithoutPersists initialState={initialState}>
                      <EmployeeApp />
                    </RootWithoutPersists>)
})

afterEach(() => {
  component.unmount()
})

it('Employee app contains heading text', () => {
  expect(component.find('h1').render().text()).toEqual('BILL CALCULATOR')
})

it('Employee app contains list of table according to data', () => {
  expect(component.find('div.circle-box').length).toEqual(1)
})
