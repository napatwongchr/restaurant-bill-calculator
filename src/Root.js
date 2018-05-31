import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import persistStore from './Store'

const activate = persistStore()

const Root = ({ children }) => {
  return (
    <Provider store={activate.store}>
      <PersistGate loading={null} persistor={activate.persistor}>
        { children }
      </PersistGate>
    </Provider>
  )
}

export default Root
