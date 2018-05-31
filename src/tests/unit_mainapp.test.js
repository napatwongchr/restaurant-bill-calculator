import React from 'react'
import { mount, shallow } from 'enzyme'
import RootWithoutPersists from '../RootWithoutPersists'

import MainApp from '../components/MainApp'

let component

beforeEach(() => {
  component = mount(<RootWithoutPersists>
                      <MainApp />
                    </RootWithoutPersists>)
})

it('Main app contains headings and 3 role cards', () => {
  expect(component.find('h1').render().text()).toEqual('SELECT ROLE')
  expect(component.find('div.card').length).toEqual(3)
})
