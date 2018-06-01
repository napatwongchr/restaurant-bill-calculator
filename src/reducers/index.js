import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import TableReducer from './TableReducer'
import CodeReducer from './CodeReducer'

export default combineReducers({
  table: TableReducer,
  code: CodeReducer,
  form: formReducer
})
