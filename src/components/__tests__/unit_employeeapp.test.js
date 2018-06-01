import React from 'react'
import { mount } from 'enzyme'
import Tables from '../../data/Tables'
import RootWithoutPersists from '../../RootWithoutPersists'

import EmployeeApp from '../EmployeeApp'

let component

beforeEach(() => {
  const initialState = {
                          table: {
                            tables: Tables.data
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
  expect(component.find('div.circle-box').length).toEqual(24)
})
