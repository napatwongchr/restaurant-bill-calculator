import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import persistStore from './Store';

const activate = persistStore()

ReactDOM.render(<Provider store={activate.store}>
  <PersistGate loading={null} persistor={activate.persistor}>
    <App />
  </PersistGate>
</Provider>, document.getElementById('root'));
registerServiceWorker();
