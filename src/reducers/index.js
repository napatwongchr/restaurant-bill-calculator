import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import TableReducer from './TableReducer'
import CodeReducer from './CodeReducer'

export default combineReducers({
  auth: AuthReducer,
  table: TableReducer,
  code: CodeReducer
})
