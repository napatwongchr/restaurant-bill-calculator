import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import TableReducer from './TableReducer'

export default combineReducers({
  auth: AuthReducer,
  table: TableReducer
})
