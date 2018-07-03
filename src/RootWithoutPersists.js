import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const RootWithoutPersists = ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk))

  return <Provider store={store}>{children}</Provider>
}

export default RootWithoutPersists
