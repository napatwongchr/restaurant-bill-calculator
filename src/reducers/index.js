import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import AuthReducer from './AuthReducer'
import TableReducer from './TableReducer'
import CodeReducer from './CodeReducer'

export default combineReducers({
  auth: AuthReducer,
  table: TableReducer,
  code: CodeReducer,
  form: formReducer
})
